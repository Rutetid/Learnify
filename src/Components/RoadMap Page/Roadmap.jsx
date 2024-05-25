import React, { useEffect, useState } from 'react'
import page from './style.module.css'
import { useParams } from 'react-router-dom'
import fetchCourses from '../../utils/fetchCourses';
import { useNavigate } from 'react-router-dom';

export default function Roadmap() {

    const { courseCode } = useParams();
    const [course, setCourse] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getCourse();
    }, []);

    const getCourse = async () => {
        const allCourses = await fetchCourses();
        const course = allCourses.find(course => course.code === courseCode);
        console.log(course);
        setCourse(course);
    }

    return (
        <div id={page.roadmap} className='font-poppins'>
            {
                course ? <>
                    <img src="box.svg" alt="" id={page.box} />
                    <div id={page.backBtn} className={`${page.df} ${page.aic} cursor-pointer`} onClick={() => { navigate(-1) }}>
                        <span>&#60;-</span>Back
                    </div>
                    <div>
                        <div className={`${page.section} flex justify-center items-center ${page.df_col}`}>
                            <div id={page.heading} className="flex flex-col justify-center items-center">
                                <h1 className='font-semibold text-5xl'>{course?.courseTitle}</h1>
                                <p className='text-2xl'>Total Tasks : <strong>{course?.course.length}</strong></p>
                            </div>
                        </div>

                        {
                            course?.course.map((chapter, index) => (
                                <div className={`${page.section} ${page.df_col} ${page.jcc}`} key={index}>
                                    <div className={`${page.chapter} ${page.df_col} ${page.jcc} ${page.aic}`}>
                                        <div>
                                            <h2 className='font-medium text-2xl'>Chapter {index + 1}: {chapter.step_heading}</h2>
                                            {
                                                chapter.step_description.map((desc, index) => (
                                                    <p key={index}>{desc}</p>
                                                ))
                                            }
                                        </div>
                                        <button type="button" className="text-gray-900 mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-52 h-10">{chapter.isSubmit? "Submit Task" : "Complete Task"}</button>
                                    </div>
                                    <div className={`${page.line1} ${page.df} ${page.jcc} ${page.aic} `}>
                                        <div className={page.line2}></div>
                                    </div>
                                </div>
                            ))
                        }


                        {/* <div className={`${page.section} ${page.df_col} ${page.jcc}`}>
                            <div className={`${page.chapter} ${page.df_col} ${page.jcc} ${page.aic}`}>
                                <div>
                                    <h2 className='font-medium text-2xl'>Chapter 2: Introduction</h2>
                                    <p>Introduction to Web Development</p>
                                </div>
                            </div>
                            <div className={`${page.line1} ${page.df} ${page.jcc} ${page.aic} `}>
                                <div className={page.line2}></div>
                            </div>
                        </div>
                        <div className={`${page.section} ${page.df_col} ${page.jcc}`}>
                            <div className={`${page.chapter} ${page.df_col} ${page.jcc} ${page.aic}`}>
                                <div>
                                    <h2 className='font-medium text-2xl'>Chapter 2: Introduction</h2>
                                    <p>Introduction to Web Development</p>
                                </div>
                            </div>
                            <div className={`${page.line1} ${page.df} ${page.jcc} ${page.aic} `}>
                                <div className={page.line2}></div>
                            </div>
                        </div>
                        <div className={`${page.section} ${page.df_col} ${page.jcc}`}>
                            <div className={`${page.chapter} ${page.df_col} ${page.jcc} ${page.aic}`}>
                                <div>
                                    <h2 className='font-medium text-2xl'>Chapter 2: Introduction</h2>
                                    <p>Introduction to Web Development</p>
                                </div>
                            </div>
                            <div className={`${page.line1} ${page.df} ${page.jcc} ${page.aic} `}>
                                <div className={page.line2}></div>
                            </div>
                        </div> */}
                    </div>
                </>
                    : <h1 className='text-4xl font-bold'>Loading...</h1>
            }
        </div>
    )
}
