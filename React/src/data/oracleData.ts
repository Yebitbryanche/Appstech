import securityImg from "../assets/images/security.png";
import dataImg from "../assets/images/data.png";
import wareHouse from "../assets/images/warehouse.png";
import cloud from "../assets/images/cloud.jpg";
import exadata from "../assets/images/exadata.jpg";
import edition from "../assets/images/edition.jpg";


export interface OracleDataItems{
    image: string;
    title: string;
    description: string;
    link: string;
}

export const OracleData: OracleDataItems[] = [
    {
        image: securityImg,
        title: "Database Security",
        description: "Oracle provides a comprehensive portfolio of security solutions to ensure data privacy, protect against insider threats, and enable regulatory compliance.",
        link: "https://www.oracle.com/security/database-security/",
    },
    {
        image: dataImg,
        title: "Big Data",
        description: "Oracle offers a broad portfolio of products to help you acquire and organize diverse data sources and analyze them alongside your existing data to find new insights and capitalize on hidden relationships.",
        link: "https://www.oracle.com/us/technologies/big-data/",
    },
    {
        image: wareHouse,
        title: "Data Warehousing",
        description: "Oracle Exadata and Oracle Database 11g, complete with in-database advanced analytics, offer a fast, cost-effective platform for data warehousing and Business Intelligence applications.",
        link: "https://www.oracle.com/autonomous-database/autonomous-data-warehouse/",
    },
    {
        image: cloud,
        title: "Database Clouds",
        description: "Oracle offers a broad portfolio of software and hardware products and services to enable public, private, and hybrid clouds.",
        link: "https://www.oracle.com/cloud/",
    },
    {
        image: exadata,
        title: "Oracle EXADATA",
        description: "Oracle Exadata is the only database machine that provides extreme performance for both data warehousing and OLTP applications, making it the ideal platform for consolidating mixed database workloads onto private clouds.",
        link: "https://www.oracle.com/engineered-systems/exadata/",
    },
    {
        image: edition,
        title: "Database Editions",
        description: "Whether you’re a lone developer, a midsize business, or large corporate enterprise, there’s an edition of the world’s #1 database to meet your business and technical requirements.",
        link: "https://www.oracle.com/database/technologies/",
    }

]