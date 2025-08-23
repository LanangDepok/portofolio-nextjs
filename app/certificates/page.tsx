import dicodingBackendDasarImage from "@/public/certificate/dicoding_backenddasar.png";
import dicodingJsDasarImage from "@/public/certificate/dicoding_jsdasar.png";
import dicodingReactDasarImage from "@/public/certificate/dicoding_reactdasar.png";
import ccitImage from "@/public/certificate/CCIT.jpg";
import lspInformatikaImage from "@/public/certificate/LSP_informatika.jpg";
import lspTikGlobalImage from "@/public/certificate/LSP_tikglobal.jpg";
import udemyLaravelPznImage from "@/public/certificate/udemy_laravel_pzn.jpg";
import niitImage from "@/public/certificate/NIIT.jpg";
// import dicodingAwsImage from "@/public/certificate/dicoding_aws.png";
import Image from "next/image";
import Title from "@/app/components/Title";

export default function Certificates() {
  return (
    <>
      <Title />
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        <Image
          src={lspInformatikaImage}
          alt="LSP informatika certificate image"
          priority
        ></Image>
        <Image
          src={lspTikGlobalImage}
          alt="LSP tik global certificate image"
          priority
        ></Image>
        <Image src={niitImage} alt="NIIT certificate image" priority></Image>
        <Image src={ccitImage} alt="CCIT certificate image" priority></Image>
        <Image
          src={udemyLaravelPznImage}
          alt="Udemy laravel pzn certificate image"
          priority
        ></Image>
        <Image
          src={dicodingReactDasarImage}
          alt="Dicoding react dasar certificate image"
          priority
        ></Image>
        <Image
          src={dicodingJsDasarImage}
          alt="Dicoding javascript dasar certificate image"
          priority
        ></Image>
        <Image
          src={dicodingBackendDasarImage}
          alt="Dicoding backend dasar certificate image"
          priority
        ></Image>
        {/* <Image
          src={dicodingAwsImage}
          alt="Dicoding aws certificate image" priority
        ></Image> */}
      </div>
    </>
  );
}
