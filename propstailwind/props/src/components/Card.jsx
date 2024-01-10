import React from "react";

function Card({ uName, btnText = "Here" }) {
  console.log(uName);
  // console.log("props", props);
  return (
    <>
      <div class="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/412045692_900248098441923_7287579833263302665_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=a1PKCBI3Qd4AX9ZRUv0&_nc_ht=scontent.fktm8-1.fna&oh=00_AfC3sZB7KXMsiaQZl1d75sYqWTXVszjv5ynb0qvVZHwb9g&oe=65A2A0D5"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{uName}</h1>
          <p classNam="mt-2 text-sm text-gray-300">
            Being HUman in The Age Of AI
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
