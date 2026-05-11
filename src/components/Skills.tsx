"use client";

import * as SimpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
    name: string;
    icon: SimpleIcon;
}

interface SkillCategory {
    category: string;
    icon: string[];
    skills: Skill[];
}

interface CustomIcon {
    title: string;
    slug: string;
    path: string;
    svg: string;
    source: string;
    hex: string;
}

interface IconLike {
    path?: string;
    hex?: string;
    title?: string;
    slug?: string;
}

type SimpleIconsType = typeof SimpleIcons;
type SimpleIconKey = keyof SimpleIconsType;

const getIcon = (iconName: string): SimpleIcon | CustomIcon => {
    const simpleIconKey = `si${iconName}` as SimpleIconKey;
    const simpleIcon = SimpleIcons[simpleIconKey];
    if (isSimpleIcon(simpleIcon)) {
        return simpleIcon;
    }

    const customIcon = customIcons[iconName.toLowerCase()];
    if (customIcon) {
        return customIcon;
    }

    return fallbackIcon;
};

const isSimpleIcon = (icon: unknown): icon is SimpleIcon => {
    const iconLike = icon as IconLike;
    return Boolean(
        iconLike &&
        typeof iconLike === "object" &&
        "path" in iconLike &&
        "hex" in iconLike &&
        "title" in iconLike &&
        "slug" in iconLike
    );
};

const fallbackIcon: CustomIcon = {
    title: "Default",
    slug: "default",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
    source: "Custom",
    hex: "000000",
};

// All svg credits go to www.svgrepo.com, tysm ily
const customIcons: Record<string, CustomIcon> = {
    angularjs: {
        title: "AngularJS",
        slug: "angularjs",
        path: "M12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.934l1.17 2.92h2.167L12 4.21zm1.698 8.33h-3.396L12 8.45l1.698 4.09z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    csharp: {
        title: "C#",
        slug: "csharp",
        path: "M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm-2.574-7.12a5.55 5.55 0 0 0 1.985-.38v-1.181a4.5 4.5 0 0 1-2.25.566 3.44 3.44 0 0 1-2.625-1.087 4.1 4.1 0 0 1-1.012-2.906 3.9 3.9 0 0 1 .945-2.754 3.217 3.217 0 0 1 2.482-1.023 4.657 4.657 0 0 1 2.464.634l-.004-1.08a5.543 5.543 0 0 0-2.625-.555 4.21 4.21 0 0 0-3.228 1.297 4.793 4.793 0 0 0-1.212 3.409 5.021 5.021 0 0 0 1.365 3.663 4.632 4.632 0 0 0 3.473 1.392l.12.004.122.001Zm5.863-.155h.836l-.555-2.652h1.661l.567 2.652h.81l-.555-2.652 1.732.004-.15-.697H17.91l-.412-1.98h1.852l-.176-.698h-1.816l-.58-2.625h-.83l.567 2.625h-1.65l-.555-2.625h-.81l.555 2.625h-1.74l.131.698h1.748l.401 1.976h-1.826l.138.697h1.826l.556 2.652Zm.142-3.345L15 11.4h1.673l.423 1.98h-1.665Z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    java: {
        title: "Java",
        slug: "java",
        path: "M8.142 18.554s-.99.562.689.722c2.02.24 3.097.2 5.334-.2.45.256.925.47 1.42.641-5.033 2.004-11.401-.12-7.443-1.163Zm-.644-2.604s-1.076.76.602.922c2.194.2 3.915.24 6.885-.32.289.273.642.479 1.032.6-6.066 1.684-12.864.16-8.52-1.202Zm11.875 4.567s.73.561-.818 1.002c-2.882.803-12.09 1.043-14.67 0-.904-.36.816-.881 1.368-.961.56-.12.862-.12.862-.12-.99-.641-6.583 1.322-2.84 1.882 10.283 1.563 18.759-.68 16.091-1.803h.007ZM8.608 13.224s-4.69 1.043-1.679 1.403c1.291.16 3.83.12 6.196-.04 1.936-.16 3.873-.48 3.873-.48s-.689.28-1.162.56c-4.775 1.163-13.94.642-11.315-.56 2.237-1.002 4.087-.881 4.087-.881v-.002Zm8.39 4.368c4.819-2.325 2.582-4.567 1.032-4.288-.386.08-.56.16-.56.16s.13-.24.43-.32c3.056-1.001 5.465 3.006-.99 4.568 0 0 .043-.04.086-.12h.002Zm-7.915 6.332c4.646.28 11.745-.16 11.917-2.205 0 0-.344.802-3.829 1.402-3.958.681-8.863.6-11.746.16 0 0 .603.482 3.658.643ZM14.08 0s2.668 2.525-2.538 6.332c-4.174 3.085-.946 4.848 0 6.852-2.453-2.043-4.216-3.847-3.012-5.53C10.294 5.17 15.156 3.975 14.08 0Zm-1.37 11.501c1.248 1.323-.344 2.525-.344 2.525s3.184-1.523 1.72-3.407c-1.332-1.803-2.367-2.685 3.227-5.69 0 0-8.82 2.044-4.603 6.572Z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    sql: {
        title: "SQL",
        slug: "sql",
        path: "M10.002 0C4.482 0 .008 1.613.008 3.605v2.957c0 1.992 4.475 3.604 9.994 3.604 5.52 0 9.995-1.612 9.995-3.604V3.605C19.997 1.613 15.52 0 10.002 0Zm0 11.89c-5.27 0-9.614-1.472-9.994-3.338-.018.09 0 4.884 0 4.884 0 1.992 4.475 3.605 9.994 3.605 5.52 0 9.995-1.614 9.995-3.605 0 0 .01-4.795-.008-4.884-.38 1.866-4.718 3.338-9.987 3.338Zm9.985 3.621c-.38 1.865-4.715 3.337-9.985 3.337S.387 17.376.007 15.511v4.884C.007 22.387 4.483 24 10.002 24c5.52 0 9.995-1.614 9.995-3.605l-.01-4.884Z",
        svg: `<svg width="25" height="25 "role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    oracle: {
        title: "Oracle",
        slug: "oracle",
        path: "M16.223 16.357h-8.44c-2.674-.055-4.82-2.209-4.82-4.857S5.11 6.698 7.778 6.643h8.455c2.715 0 4.918 2.174 4.918 4.857 0 2.683-2.202 4.857-4.918 4.857h-.01ZM16.416 4H7.588C3.396 4.003 0 7.36 0 11.5c0 4.138 3.392 7.492 7.58 7.5h8.836c4.19-.006 7.584-3.362 7.584-7.5S20.605 4.006 16.416 4Z",
        svg: `<svg role="img" viewBox="0 0 15 15"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    redis: {
        title: "Redis",
        slug: "redis",
        path: "M23.992 13.34c-.007.23-.312.485-.933.809-1.281.668-7.914 3.398-9.329 4.132-1.414.738-2.195.73-3.313.195-1.117-.531-8.175-3.387-9.449-3.992-.633-.305-.957-.559-.969-.801v2.425c0 .242.336.496.97.801 1.273.61 8.335 3.462 9.449 3.992 1.117.536 1.898.544 3.312-.195 1.414-.734 8.047-3.465 9.329-4.132.652-.336.941-.602.941-.84v-2.391c0-.004-.004-.004-.008-.004v.001Zm0-3.953c-.012.226-.312.48-.933.808-1.281.664-7.914 3.395-9.329 4.129-1.414.738-2.195.73-3.313.2-1.117-.536-8.175-3.387-9.449-3.996-.633-.301-.957-.56-.969-.802v2.426c0 .242.336.5.97.801 1.273.61 8.331 3.461 9.449 3.996 1.117.531 1.898.54 3.312-.195 1.414-.738 8.047-3.465 9.329-4.133.652-.34.941-.605.941-.843V9.387h-.008Zm0-4.106c.012-.242-.304-.457-.949-.691-1.246-.457-7.843-3.082-9.106-3.547-1.261-.461-1.777-.442-3.261.09C9.19 1.668 2.17 4.422.921 4.91c-.625.246-.93.472-.918.715V8.05c0 .242.332.496.969.801 1.27.61 8.331 3.461 9.449 3.996 1.113.531 1.898.54 3.313-.2 1.41-.733 8.047-3.464 9.328-4.128.649-.34.938-.605.938-.844V5.28l-.009.001ZM8.594 7.578l5.563-.85-1.68 2.46-3.883-1.61Zm12.3-2.218L17.25 6.801l-3.289-1.3 3.64-1.439 3.293 1.297Zm-9.656-2.383-.54-.992 1.68.656 1.582-.516-.43 1.024 1.614.605-2.078.215-.469 1.121-.75-1.25-2.402-.215 1.793-.648ZM7.093 4.38c1.645 0 2.973.516 2.973 1.148 0 .637-1.332 1.152-2.973 1.152-1.64 0-2.973-.516-2.973-1.152 0-.633 1.332-1.148 2.973-1.148Z",
        svg: `<svg role="img" viewBox="0 0 15 15"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    h2: {
        title: "H2",
        slug: "h2",
        path: "M17.17 13.27c.142-.015.282-.022.42-.022.694 0 1.225.156 1.595.47.37.313.554.757.554 1.332 0 .48-.143.965-.431 1.456-.288.491-.773 1.067-1.456 1.727a27.35 27.35 0 0 1-1.824 1.59 52.674 52.674 0 0 1-2.273 1.745v2.082h9.895v-2.412h-5.663c.22-.158.59-.436 1.11-.834a22.347 22.347 0 0 0 1.548-1.308c.818-.762 1.426-1.5 1.824-2.217a4.607 4.607 0 0 0 .597-2.269c0-1.213-.415-2.15-1.244-2.814-.83-.663-2.035-.994-3.615-.994-.346 0-.691.017-1.037.05V6.039h-3.313v4.703H8.964V6.038H5.651v12.848h3.313v-5.66h4.893v5.66h.038c.31-.24.62-.487.932-.74a27.208 27.208 0 0 0 1.824-1.59c.188-.182.361-.358.52-.527V13.27ZM12.012 23.3C5.776 23.3.7 18.223.7 11.987.7 5.758 5.77.701 12.01.701 18.248.7 23.3 5.753 23.3 11.988v.35h.7v-.35C24 5.366 18.634 0 12.012 0 5.385 0 0 5.37 0 11.988 0 18.611 5.39 24 12.012 24h.35v-.7h-.35Z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
};

const createSkillsData = (texts: typeof en): SkillCategory[] => [
    {
        category: texts.skills.categories[0].category,
        icon: ["uil", "uil-brackets-curly", "skills__icon"],
        skills: [
            { name: "Java", icon: getIcon("java") },
            { name: "JavaScript", icon: SimpleIcons.siJavascript },
            { name: "TypeScript", icon: SimpleIcons.siTypescript },
            { name: "Python", icon: SimpleIcons.siPython },
            { name: "Go", icon: SimpleIcons.siGo },
            { name: "C#", icon: getIcon("csharp") },
            { name: "SQL", icon: getIcon("sql") },
            { name: "Shell", icon: SimpleIcons.siGnubash },
            { name: "C", icon: SimpleIcons.siC },
            { name: "C++", icon: SimpleIcons.siCplusplus },
            { name: "HTML", icon: SimpleIcons.siHtml5 },
            { name: "CSS", icon: SimpleIcons.siCss3 },
        ],
    },
    {
        category: texts.skills.categories[1].category,
        icon: ["uil", "uil-wrench", "skills__icon"],
        skills: [
            { name: "Spring Boot", icon: SimpleIcons.siSpring },
            { name: "Hibernate", icon: SimpleIcons.siHibernate },
            { name: "JUnit", icon: SimpleIcons.siJunit5 },
            { name: "Mockito", icon: SimpleIcons.siMocha },
            { name: "Node.js", icon: SimpleIcons.siNodedotjs },
            { name: "Prisma", icon: SimpleIcons.siPrisma },
            { name: "Angular", icon: SimpleIcons.siAngular },
            { name: "Next.js", icon: SimpleIcons.siNextdotjs },
            { name: "React.js", icon: SimpleIcons.siReact },
            { name: "Tailwind CSS", icon: SimpleIcons.siTailwindcss },
            { name: "AngularJS", icon: getIcon("angularjs") },
            { name: ".NET", icon: SimpleIcons.siDotnet },
            { name: "React Native", icon: SimpleIcons.siReact },
        ],
    },
    {
        category: texts.skills.categories[2].category,
        icon: ["uil", "uil-database", "skills__icon"],
        skills: [
            { name: "MySQL", icon: SimpleIcons.siMysql },
            { name: "PostgreSQL", icon: SimpleIcons.siPostgresql },
            { name: "Oracle", icon: getIcon("oracle") },
            { name: "SQLite", icon: SimpleIcons.siSqlite },
            { name: "Redis", icon: getIcon("redis") },
            { name: "MongoDB", icon: SimpleIcons.siMongodb },
            { name: "H2", icon: getIcon("h2") },
        ],
    },
    {
        category: texts.skills.categories[3].category,
        icon: ["uil", "uil-cloud-data-connection", "skills__icon"],
        skills: [
            { name: "AWS", icon: SimpleIcons.siAmazonwebservices },
            { name: "Docker", icon: SimpleIcons.siDocker },
            { name: "Git", icon: SimpleIcons.siGit },
            { name: "GitHub", icon: SimpleIcons.siGithub },
            { name: "Maven", icon: SimpleIcons.siApachemaven },
            { name: "Gradle", icon: SimpleIcons.siGradle },
            { name: "Linux", icon: SimpleIcons.siLinux },
            { name: "RabbitMQ", icon: SimpleIcons.siRabbitmq },
            { name: "Kafka", icon: SimpleIcons.siApachekafka },
            { name: "Flyway", icon: SimpleIcons.siFlyway },
        ],
    },
];

const Skills = () => {
    const { language } = useLanguage();
    const texts = language === "pt-BR" ? ptBR : en;
    const skillsData = createSkillsData(texts);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{texts.skills.title}</h2>
            <span
                className="section__subtitle"
                dangerouslySetInnerHTML={{
                    __html: texts.skills.subtitle,
                }}
            />

            <div className="skills__container container">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills__category">
                        <div className="skills__header">
                            <i className={category.icon.join(" ")}></i>
                            <h3 className="skills__category-title">
                                {category.category}
                            </h3>
                        </div>
                        <div className="skills__list">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill__badge">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="skill__icon"
                                        fill="currentColor"
                                    >
                                        <path d={skill.icon.path} />
                                    </svg>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
