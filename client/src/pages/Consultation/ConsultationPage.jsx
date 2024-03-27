import React from 'react';
import ConsultationCard from './ConsultationCard';
import GenPhysicianImg from './consultationImg/general physician.png';
import cardiologyImg from './consultationImg/cardiology.png';
import gynaeImg from './consultationImg/gynae.png';
import psychologyImg from './consultationImg/psychology.png';
import psychiartyImg from './consultationImg/psychiatry.png';
import neurologyImg from './consultationImg/neurology.png'

const App = () => {
  return (

    
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">E-Consultation for Specific Disease</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ConsultationCard
          title="General Physician"
          info="Cold,flu,vomiting,headaches,infections or any other general health issues."
          photo={GenPhysicianImg}
        />
         <ConsultationCard
          title="Psychiatry"
          info="Diagnosis, prevention and treatment of mental disorders related to mood, behaviour and perceptions."
          photo={psychiartyImg}
        />
         <ConsultationCard
          title="Psychology"
          info="Identify and diagnose mental, behavioral and emotional disorders."
          photo={psychologyImg}
        />
         <ConsultationCard
          title="Gynae"
          info="Any women's health related issues including pregnancy, hormone disorders etc."
          photo={ gynaeImg}
        />
         <ConsultationCard
          title="Cardiology"
          info="Diagnosis,treatment of congenital heart defects,heart failureand valvular heart disease."
          photo={cardiologyImg}
        />
        <ConsultationCard
          title="Neurology"
          info="Diagnosis, treatment for disease involving the central & peripheral nervous systems."
          photo={neurologyImg}
        />
        {/* Add more cards for other diseases */}
      </div>
    </div>
  );
};

export default App;
