import React from "react";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className="flex items-center min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <h1>하루를 일찍 시작할 당신을 위한 미라클 모닝</h1>
          <p className="py-1">회원가입을 해야 이용하실 수 있어요. </p>
          <button
            onClick={handleClick}
            type="button"
            className="w-full px-3 py-2 text-white bg-red-400 focus:bg-rose-600 focus:outline-none"
          >
            로그인 / 회원가입 하러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
