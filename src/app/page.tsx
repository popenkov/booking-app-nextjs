import styles from "./page.module.css";

async function getData() {
  const response = await fetch("http://localhost:8000/first-screen", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("loading error");
  }

  return response.json();
}

export default async function Home() {
  const data = await getData();
  return <div>hello world {data.slider[0].title}</div>;
}
