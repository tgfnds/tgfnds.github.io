import React from "react";
import styles from "../styles/Skills.module.css";
import SvgIcon from "./svg-icon";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__title}>Skills</div>
      <p>Used Professionally</p>
      <div className={styles.skills__icons}>
        <SvgIcon
          animated
          bgColor="#1b0736"
          borderRadius="99999px"
          path="../images/dot-net.svg"
          height={32}
          name="dotnet"
        />
        <SvgIcon animated path="../images/html5.svg" height={36} name="html5" />
        <SvgIcon animated path="../images/css3.svg" height={36} name="css3" />
        <SvgIcon animated path="../images/sass.svg" height={36} name="sass" />
        <SvgIcon animated path="../images/c--4.svg" height={36} name="c#" />
        <SvgIcon
          animated
          path="../images/javascript.svg"
          height={36}
          name="javascript"
        />
        <SvgIcon
          animated
          path="../images/microsoftsqlserver.svg"
          height={36}
          name="sqlserver"
        />
      </div>
      <p>As a Hobby</p>
      <div className={styles.skills__icons}>
        <SvgIcon animated path="../images/react.svg" height={36} name="react" />
        <SvgIcon
          animated
          path="../images/typescript.svg"
          height={36}
          name="typescript"
        />
        <SvgIcon
          animated
          path="../images/tailwindcss.svg"
          height={36}
          name="tailwindcss"
        />
        <SvgIcon
          animated
          path="../images/mongodb.svg"
          height={36}
          name="mongodb"
        />
        <SvgIcon animated path="../images/git.svg" height={36} name="git" />
        <SvgIcon animated path="../images/npm.svg" height={36} name="npm" />
      </div>
      <p>Learning/Having fun</p>
      <div className={styles.skills__icons}>
        <SvgIcon
          animated
          path="../images/flutter.svg"
          height={36}
          name="flutter"
        />
        <SvgIcon
          animated
          path="../images/vue-dot-js.svg"
          height={36}
          name="vue"
        />
        <SvgIcon
          animated
          path="../images/django.svg"
          height={36}
          name="django"
        />
        <SvgIcon
          animated
          path="../images/python.svg"
          height={36}
          name="python"
        />
      </div>
    </div>
  );
};

export default Skills;
