import React from 'react';
import './CustomerFlow.css';

const CustomerFlow = () => {
  const processSteps = [
    {
      id: 1,
      title: "Welcome & Check-in",
      description: "Customer arrives and is greeted by receptionist",
      icon: "👋"
    },
    {
      id: 2,
      title: "Registration",
      description: "Complete necessary forms and documentation",
      icon: "📝"
    },
    {
      id: 3,
      title: "Waiting Area",
      description: "Comfortable seating in our reception area",
      icon: "💺"
    },
    {
      id: 4,
      title: "Service Consultation",
      description: "Initial discussion of needs and requirements",
      icon: "💬"
    },
    {
      id: 5,
      title: "Professional Service",
      description: "Meeting with our expert professional",
      icon: "👨‍💼"
    },
    {
      id: 6,
      title: "Feedback & Follow-up",
      description: "Share experience and schedule next visit",
      icon: "✨"
    }
  ];

  return (
    <div className="customer-flow-container">
      <h2 className="flow-title">Customer Journey Cycle</h2>
      <div className="flow-circle">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="flow-step"
            style={{
              '--step-index': index,
              '--total-steps': processSteps.length
            }}
          >
            <div className="step-content">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
        <div className="circle-center">
          <span>Customer<br/>Journey</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerFlow; 