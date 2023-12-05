import React from "react";

function SkillsTech() {

    const skillsTech1 = [
        {
            picture: '../../../projportf/HTML5.png',
            value: "80",
            type: "danger",
        },
        {
            picture: '../../../projportf/css3.png',
            value: "70",
            type: "primary",
        },
        {
            picture: '../../../projportf/js.png',
            value: "60",
            type: "warning",
        },
        {
            picture: '../../../projportf/php.png',
            value: "50",
            type: "info",
        },
        {
            picture: '../../../projportf/React.png',
            value: "60",
            type: "success",

        },
        {
            picture: '../../../projportf/Bootstrap.png',
            value: "60",
            type: "info",

        },
        {
            picture: '../../../projportf/Symfony.png',
            value: "50",
            type: "danger",

        },
    ];

    const skillsTech2 = [
        {
            picture: '../../../projportf/vscode.png',
            value: "70",
            type: "primary",

        },
        {
            picture: '../../../projportf/PhpStorm.png',
            value: "60",
            type: "success",

        },
        {
            picture: '../../../projportf/mysqlWorkbench.png',
            value: "70",
            type: "danger",

        },
        {
            picture: '../../../projportf/git.png',
            value: "50",
            type: "info",
        },
        {
            picture: '../../../projportf/github.png',
            value: "60",
            type: "warning",

        },
        {
            picture: '../../../projportf/cms.png',
            value: "80",
            type: "success",
        },
        {
            picture: '../../../projportf/Figma.png',
            value: "60",
            type: "danger",

        },
    ];

    return (
        <>
            <div className="row" style={{ marginTop: '7rem' }}>
                {skillsTech1.map((skill, index) => (
                    <div className="mt2 col-lg-12" key={index}>
                        <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}></h3>
                        <div className="progress  mb-4" role="progressbar" style={{ height: '20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <img className="language_skills" src={skill.picture} alt="logo_des_langages" />
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
                        <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}></h3>
                        <div div className="progress  mb-4" role="progressbar" style={{ height: ' 20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <img className="technologie_skills" src={skill.picture} alt="logo_des_technologies" />
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