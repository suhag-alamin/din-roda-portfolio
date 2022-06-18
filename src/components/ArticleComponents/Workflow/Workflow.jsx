import React from "react";
import { Container } from "react-bootstrap";

const Workflow = () => {
  return (
    <div className="workflow-section">
      <Container className="py-5">
        <h3 className="section-title text-uppercase mb-5">
          workflow in 3 steps
        </h3>

        <div class="step-timeline mb-5">
          <ul>
            <li data-counter="1">
              <div className="workflow-box">
                <h3 className="workflow-title">
                  Characterization and definition of processes
                </h3>
                <p className="workflow-des">
                  At this stage we will dive deeper into things, analyze all the
                  processes in the business, improve, streamline, if necessary
                  we will open new processes. this stage will take place in a
                  number of frontal or zoom sessions.
                </p>
              </div>
            </li>
            <li data-counter="2">
              <div className="workflow-box">
                <h3 className="workflow-title">
                  Development and adaptation of systems
                </h3>
                <p className="workflow-des">
                  After the characterization, in the development phase the
                  relevant automation systems will be developed and connected to
                  the systems of the business.
                </p>
              </div>
            </li>
            <li data-counter="3">
              <div className="workflow-box last-workflow-box">
                <h3 className="workflow-title">
                  Training, assimilation and accompaniment
                </h3>
                <p className="workflow-des">
                  After the development of the systems is complete, we will meet
                  for guidance in the business and begin the implementation
                  period. the implementation period usually takes about a month,
                  during which the consultant is in intensive contact with
                  business officials in order to ensure successful and correct
                  use of systems and processes. if necessary, adjustments are
                  also made to the systems.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Workflow;
