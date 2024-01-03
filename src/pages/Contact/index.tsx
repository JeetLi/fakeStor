import { Main } from "./style";

interface Contact {}

const Contact = ({}: Contact) => {
  return (
    <Main className="px-5 py-5 py-md-4 h-100">
      <section className="d-flex flex-column align-items-center justify-content-center text-center gap-3 gap-md-4 h-100">
        <ul className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-lg-5">
          <li className="opacity-hover">
            <a
              href="https://github.com/JeetLi"
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label="github"
              className="d-block p-3"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="opacity-hover">
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label="telegram"
              className="d-block p-3"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </li>
        </ul>
        <address className="d-flex flex-column gap-3">
          <h4 className="text-uppercase fw-bold fs-1">
            fakeStore company Limited
          </h4>
          <p className="fw-bold fs-3">Gomel, Oskina 45</p>
        </address>
      </section>
    </Main>
  );
};

export default Contact;
