import React from "react";
import { useRouter } from "next/dist/client/router";
import CenteredLayout from "../components/CenteredLayout";
import UserService from "../services/userService";
const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <>
      <CenteredLayout>
        <h1>하루를 일찍 시작할 당신을 위한 미라클 모닝</h1>
        <p className="py-1">회원가입을 해야 이용하실 수 있어요. </p>
        <button
          onClick={handleClick}
          type="button"
          className="w-full px-3 py-2 text-white bg-red-400 focus:bg-rose-600 focus:outline-none"
        >
          로그인 / 회원가입 하러 가기
        </button>
        <button
          onClick={async () => {
            await UserService.test();
          }}
          type="button"
          className="w-full px-3 py-2 text-white bg-red-400 focus:bg-rose-600 focus:outline-none"
        >
          testtesttest
        </button>
      </CenteredLayout>
    </>
  );
};

export default Home;
