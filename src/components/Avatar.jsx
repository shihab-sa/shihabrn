function Avatar() {
  return (
    <div className=" flex items-center">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="ml-10">
        <h1 className=" md:text-3xl font-extrabold">Shihab Ahmed</h1>
        <h2 className=" text-xm">React Native Expert</h2>
      </div>
    </div>
  );
}

export default Avatar;
