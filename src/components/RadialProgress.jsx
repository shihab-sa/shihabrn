export default function RadialProgress() {
  return (
    <div
      className="radial-progress"
      style={{ "--value": "70", "--size": "10rem", "--thickness": "2rem" }}
      role="progressbar"
    >
      70%
    </div>
  );
}
