export const CurrentTime = () => {
  let time = new Date();
  Date();
  return (
    <>
      <p className="lead">
        this is the current times {time.toLocaleDateString()} ,{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
