
export default function Trainings({trainings}) {
    return (
        <>
            <h2 id="training" className="mb-11">Formation / Certifications</h2>

            <div className="flex flex-col justify-start">
                    {trainings.map(
                        training => 
                            <div>
                                <span className="text-sm rounded-full ring-1 ring-slate-300 p-2">
                                    {training.start} {training.start && training.end ? "-" : ""} {training.end}
                                    </span>
                                <p className="font-semibold flex flex-col">
                                    <span className="font-semibold">{training.name}</span>
                                    <span className="font-normal italic"> {"à " + training.school}</span>
                                </p>
                                
                            </div>
                    )
                    }
            </div>
        </>

    )
}