import { useState } from "react";

export const Modal = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <button
        className="contrast"
        data-target="modal-example"
        onClick={toggleShow}
      >
        Launch demo modal
      </button>

      <dialog id="modal-example" open={show}>
        <article>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            data-target="modal-example"
            onClick={toggleShow}
          ></a>
          <h3>Confirm your action!</h3>
          <p>
            Cras sit amet maximus risus. Pellentesque sodales odio sit amet
            augue finibus pellentesque. Nullam finibus risus non semper euismod.
          </p>
          <footer>
            <a
              href="#cancel"
              role="button"
              className="secondary"
              data-target="modal-example"
              onClick={toggleShow}
            >
              Cancel
            </a>
            <a
              href="#confirm"
              role="button"
              data-target="modal-example"
              onClick={toggleShow}
            >
              Confirm
            </a>
          </footer>
        </article>
      </dialog>
    </>
  );
};
