export function Footer() {
  return (
    <div className="container-lg">
      <div className="row">
        <div className="d-flex justify-content-center my-2">
          <span>Made with ❤️ by</span>
          <a className="ms-1" href="https://github.com/dagyu">
            dagyu
          </a>
        </div>
        <div className="d-flex justify-content-center my-2">
          <span>Source code of</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
            href="https://github.com/dagyu/developerfolio"
          >
            website
          </a>
          <span>| Source code of</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
            href="https://github.com/dagyu/resume"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}
