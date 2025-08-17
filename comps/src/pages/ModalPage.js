import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat imperdiet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi varius sollicitudin ipsum non mattis. Suspendisse sit amet turpis turpis. Nullam et justo semper, fermentum ligula commodo, tincidunt sapien. Praesent elementum porttitor ante, quis sodales mi elementum sit amet. Fusce a eros a erat pellentesque egestas quis ut mi. Cras risus diam, vehicula eu lorem rutrum, porttitor suscipit lacus. Morbi nec eleifend nibh. Fusce eget congue nisl, nec rhoncus ligula. Cras lorem turpis, vulputate nec facilisis in, feugiat eu libero.</p>
    </div>
  );
}

export default ModalPage;
