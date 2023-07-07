import MainContainer from "@/components/mainContainer/MainContainer";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout showNavbar={true}>
      <main className="">
        <MainContainer />
      </main>
    </RootLayout>
  );
}
