import { NextResponse } from "next/server";

export async function GET() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Create a website or web application using HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description:
        "Create a mobile app for iOS and Android using Swift and Kotlin.",
    },
    {
      id: 3,
      name: "Software Development",
      description:
        "Create a software application using a programming language of your choice.",
    },
    {
      id: 4,
      name: "Database Management",
      description:
        "Design, implement, and manage databases for storing and retrieving data.",
    },
    {
      id: 5,
      name: "Cybersecurity",
      description:
        "Protect computer systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.",
    },
    {
      id: 6,
      name: "Network Administration",
      description:
        "Design, implement, and manage computer networks, including local area networks (LANs), wide area networks (WANs), and the Internet.",
    },
    {
      id: 7,
      name: "Cloud Computing",
      description:
        "Use cloud computing services such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and IBM Cloud.",
    },
    {
      id: 8,
      name: "Artificial Intelligence",
      description:
        "Design and develop AI and machine learning models to solve complex problems.",
    },
    {
      id: 9,
      name: "Data Analysis",
      description:
        "Collect, organize organize, and analyze data to extract insights and make informed decisions.",
    },
    ,
    {
      id: 10,
      name: "Web Development",
      description:
        "Design and develop web applications using HTML, CSS, and JavaScript.",
    },
    {
      id: 11,
      name: "Mobile App Development",
      description:
        "Design and develop mobile applications for Android and iOS devices.",
    },
    {
      id: 12,
      name: "Digital Marketing",
      description:
        "Develop and implement digital marketing campaigns using social media, email, and search engine optimization (SEO).",
    },
  ];
  return NextResponse.json(services);
}
