function object() {
    const students = [
        { name: "Bob", scores: [100, 100, 100] },
        { name: "Boo", scores: [90, 85, 77] },
        { name: "Bae", scores: [99, 92, 77] },
        { name: "Tae", scores: [77, 65, 44] },
        { name: "Tou", scores: [35, 36, 37] },
    ];
    console.log("Objects stored in student data :", students);
    const avg = students.map(student => {
        const total = student.scores.reduce((acc, score) => acc + score, 0);
        const avgScore = total / student.scores.length;
        return { name: student.name, average: avgScore };
    });
    const above = avg.filter(student => student.average > 85);
    console.log(above);
} object();