import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.roundImage}
        src={"/assets/logo.png"}
        height={300}
        width={300}
        alt="athletes nepal logo"
      ></Image>
      <div>
        <h3 style={{ margin: 0, padding: 0 }}>Our mission</h3>
        <ul>
          <li>
            <b>Sustainable sporting:</b> This mission focuses on promoting
            sustainability in the realm of sports. It could involve initiatives
            such as reducing the environmental impact of sporting events,
            encouraging eco-friendly practices within sports organizations, or
            promoting sustainable lifestyles and choices among athletes and
            fans. This mission aligns with the broader global efforts to address
            climate change and promote sustainable development.
          </li>
          <li>
            <b>Employment opportunities:</b> This mission aims to create and
            expand employment opportunities within the sports industry. It could
            involve initiatives such as promoting diversity and inclusion in
            sports-related professions, developing training programs for
            aspiring athletes, coaches, or sports administrators, or fostering
            entrepreneurship and job creation in sports-related sectors. This
            mission recognizes the potential of sports to generate economic
            growth and provide meaningful employment opportunities.
          </li>
          <li>
            <b>Sport as business:</b> This mission recognizes that sports can be
            a significant economic driver and focuses on leveraging sports as a
            business. It involves strategies to maximize the commercial
            potential of sports, such as attracting investments, enhancing
            sponsorship and advertising opportunities, developing sports-related
            infrastructure, and utilizing technology to improve the fan
            experience. This mission aims to create a thriving sports industry
            that benefits stakeholders and contributes to economic development.
          </li>
          <li>
            <b>Story on unheard:</b> This mission revolves around amplifying the
            voices and experiences of marginalized or underrepresented
            individuals within the world of sports. It seeks to tell stories
            that have been overlooked or ignored, giving a platform to
            individuals who have historically been unheard. This mission can
            involve initiatives such as promoting diversity in sports media
            coverage, highlighting inspiring stories of athletes from
            underrepresented backgrounds, or addressing social issues within the
            sports community. The aim is to promote inclusivity, social justice,
            and equality within the sports world.
          </li>
        </ul>
      </div>
    </main>
  );
}
