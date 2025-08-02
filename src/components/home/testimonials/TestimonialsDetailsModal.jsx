import TestimonialsDetails from "./TestimonialsDetails";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";

export default function TestimonialsDetailsModal({ testimonialsDetails }) {
  return (
    <Modal>
      <Modal.Open opens="testimonialsDetails">
        <Button AriaLabel="Read More" Font="w-[100px]! ms-auto!" size="small">
          <span>Read More</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="testimonialsDetails">
        <TestimonialsDetails testimonialsDetails={testimonialsDetails} />
      </Modal.Window>
    </Modal>
  );
}
