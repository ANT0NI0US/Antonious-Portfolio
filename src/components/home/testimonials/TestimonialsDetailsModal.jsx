import TestimonialsDetails from "./TestimonialsDetails";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";

export default function TestimonialsDetailsModal({ testimonialsDetails }) {
  return (
    <Modal>
      <Modal.Open opens="testimonialsDetails">
        <Button
          AriaLabel="View Full Testimonial"
          Font="mt-4"
          variation="secondary"
        >
          <span>View Full Testimonial</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="testimonialsDetails">
        <TestimonialsDetails testimonialsDetails={testimonialsDetails} />
      </Modal.Window>
    </Modal>
  );
}
