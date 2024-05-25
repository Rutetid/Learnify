import supabase from "./supabase";

const fetchCourses = async (user) => {
    const courseTitles = await supabase.from('course_titles').select('*');
    const steps = [];

    // Loop through course titles
    for (let title of courseTitles.data) {
        const courseSteps = await supabase
            .from('course_steps')
            .select('*')
            .eq('course_code', title.course_code);

        if (courseSteps.error) {
            console.error(courseSteps.error);
        } else {
            steps.push(...courseSteps.data); // Spread operator to combine arrays
        }
    }

    // Format course data with headings and descriptions (same logic)
    const formattedData = steps.reduce((acc, curr) => {
        // Check if the heading already exists
        if (!acc.find(obj => obj.step_heading === curr.step_heading)) {
            // If it doesn't, create a new object with heading and an empty description array
            acc.push({ step_heading: curr.step_heading, step_description: [], isSubmit: curr.isSubmit, code: curr.course_code });
        }

        // Find the existing object with the matching heading
        const matchingObject = acc.find(obj => obj.step_heading === curr.step_heading);

        // Add the current description to the existing object's description array (maintains order)
        matchingObject.step_description.push(curr.step_description);

        return acc;
    }, []);

    const courseList = [];

    // Create an array of json objects with course title and steps
    for (let course of courseTitles.data) {
        const courseSteps = formattedData.filter(step => step.code === course.course_code);
        courseList.push({ courseTitle: course.course_title, course: courseSteps });
    }

    return courseList;
}

export default fetchCourses;