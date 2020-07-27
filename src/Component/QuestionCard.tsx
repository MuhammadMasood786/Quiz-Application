import React, { useState } from 'react'
import { QuestionPropType } from '../Type/quiz_type'
import '../App.css';


const QuestionCard: React.FC<QuestionPropType> = ({ options, question, callback }) => {

    let [selectedAns, setSelectedAns] = useState("");

    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="cardStyle mt-5">
                    <h6 className="questionStyle">{question}</h6>
                    <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                        {
                            options.map((opt: string, ind: number) => {
                                return (
                                    <div key={ind}>
                                        <label className="labelStyle">
                                            <input
                                                className="radioStyle"
                                                type="radio"
                                                name="opt"
                                                checked={selectedAns === opt}
                                                value={opt}
                                                required
                                                onChange={handleSelection}
                                            />
                                            {opt}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        <input type="submit" className="btn btn-outline-dark" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;

