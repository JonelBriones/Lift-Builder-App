import React, { useEffect, useState } from "react";
import { DEFAULT_DATA } from "../../DefaultData.js";
import "./programs.css";
const Programs = () => {
  const [programs, setProgramList] = useState([]);

  useEffect(() => {
    setProgramList(DEFAULT_DATA.programs);
  }, []);

  console.log(programs);

  const toggleWeek = (index) => {
    setProgramList(
      programs.map((program, idx) =>
        index == idx ? { ...program, toggle: !program.toggle } : program
      )
    );
  };

  return (
    <div className="exercise">
      {programs.map((p, idx) => (
        <div key={idx}>
          <h1 onClick={() => toggleWeek(idx)}>Week {idx + 1}</h1>
          {p.toggle &&
            p.program.map((program, idx) => (
              <div key={program.id}>
                <div className="exercise-header">
                  <h4 className="black-border"> Day {idx + 1}</h4>
                  <div>
                    <span>Exercise</span>
                    <span>Sets</span>
                    <span>Reps</span>
                    <span>Load</span>
                  </div>
                </div>
                {program.workout.exercise.map((exercise, idx) => (
                  <div key={idx} className="exercise-info">
                    <span className="exercise-name">{exercise.name}</span>
                    <span className="exercise-reps">{exercise.reps}</span>
                    <span className="exercise-sets">{exercise.sets}</span>
                    <span className="exercise-load">{exercise.load}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Programs;
