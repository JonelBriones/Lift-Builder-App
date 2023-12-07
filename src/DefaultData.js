export const DEFAULT_DATA = {
  firstName: "Jonel",
  lastName: "Briones",
  email: "ijonel906@gmail.com",
  phone: "000-000-0000",
  programName: "JB's",
  headerPictures: [
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  programs: [
    {
      program: [
        {
          workout: {
            exercise: [
              { name: "front squat", reps: 5, sets: 3, load: "75%" },
              { name: "paused deadlift", reps: 6, sets: 2, load: "65%" },
            ],
          },
          id: 0,
        },
        {
          workout: {
            exercise: [
              { name: "squat", reps: 5, sets: 3, load: "75%" },
              { name: "deadlift", reps: 6, sets: 2, load: "65%" },
            ],
          },
          id: 1,
        },
      ],
    },
    {
      program: [
        {
          workout: {
            exercise: [
              { name: "squat", reps: 5, sets: 3, load: "80%" },
              { name: "deadlift", reps: 6, sets: 2, load: "70%" },
            ],
          },
          id: 2,
        },
        {
          workout: {
            exercise: [
              { name: "squat", reps: 5, sets: 3, load: "80%" },
              { name: "deadlift", reps: 6, sets: 2, load: "70%" },
            ],
          },
          id: 3,
        },
      ],
    },
  ],
};
