import React from "react";

function SkillsTech() {

    const skillsTech1 = [
        {
            value: "80",
            type: "danger",
            name: "Html",
        },
        {
            value: "70",
            type: "primary",
            name: "Css",
        },
        {
            value: "60",
            type: "warning",
            name: "Js",
        },
        {
            value: "50",
            type: "info",
            name: "Php",
        },
        {
            value: "60",
            type: "success",
            name: "React",
        },
        {
            value: "60",
            type: "info",
            name: "Bootstrap",
        },
        {
            value: "50",
            type: "danger",
            name: "Symfony",
        },
    ];

    const skillsTech2 = [
        {
            value: "70",
            type: "primary",
            name: "Vscode",
        },
        {
            value: "60",
            type: "success",
            name: "PhpStorm",
        },
        {
            value: "70",
            type: "danger",
            name: "MysqlWorkbench",
        },
        {
            value: "50",
            type: "info",
            name: "Git",
        },
        {
            value: "60",
            type: "warning",
            name: "Github",
        },
        {
            value: "80",
            type: "success",
            name: "Cms",
        },
        {
            value: "60",
            type: "danger",
            name: "Figma",
        },
    ];

    return (
        <>
            <div className="row" style={{ marginTop: '7rem' }}>
                {skillsTech1.map((skill, index) => (
                    <div className="mt2 col-lg-12" key={index}>
                        <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}>{skill.name}</h3>
                        <div className="progress  mb-4" role="progressbar" style={{ height: '20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <div className={`progress-bar progress-bar-striped bg-${skill.type}`}
                                style={{ width: `${skill.value}%`, fontSize: '1.5rem' }}>
                                {skill.value}%</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="competences__data-technologie">
                <h2>
                    technologies
                </h2>
            </div>
            <div className="row" style={{ marginTop: ' 10rem' }}>
                {skillsTech2.map((skill, index) => (
                    <div className="mt2 col-lg-12 " key={index}>
                        <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}>{skill.name}</h3>
                        <div div className="progress  mb-4" role="progressbar" style={{ height: ' 20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <div className={`progress-bar progress-bar-striped bg-${skill.type}`} style={{ width: `${skill.value}%`, fontSize: '1.5rem' }}>{skill.value}%
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}


export default SkillsTech; 