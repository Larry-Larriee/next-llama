import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// modal (boolean): determines when the code modal is open
// changeModalState (function): changes the state of the modal
// user (string): the user who submitted the code
// code (string): the code that the user submitted
// return (JSX): a modal that displaying the code that the user submitted. can be found after the user clicks on the submit button
export default function SeeCodeModal({ modal, changeModalState, user, code }) {
  return (
    <>
      {/* onClose changes the state when the user clicks outside the modal, like another way to close if the user does not click the close button */}
      <Dialog
        open={modal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          changeModalState();
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-0 xl:p-4">
            <DialogPanel className="primary-color-4 min-h-128 flex w-10/12 flex-col gap-5 rounded-xl p-4 drop-shadow-lg xl:w-1/2 xl:p-12">
              <DialogTitle as="h3" className="text-3xl font-medium text-white">
                {user}
              </DialogTitle>

              <p className="max-h-80 overflow-scroll text-xl text-white">
                {code}
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="z-5 absolute inset-0 h-screen w-screen bg-black/50 blur-md" />
    </>
  );
}
