"use client";

import { useState } from "react";

const Page = () => {

    const [question, setQuestion] = useState("");
    const [answerYes, setAnswerYes] = useState("Yes");
    const [answerNo, setAnswerNo] = useState("No");
    const [resultTitle, setResultTitle] = useState("Hooray!");
    const [resultDescription, setResultDescription] = useState("Now you're mine!");

    const [link, setLink] = useState("Click Generate Link!");
    const [copy, setCopy] = useState(false);

    const [errorQuestion, setErrorQuestion] = useState("");
    const [errorAnswerYes, setErrorAnswerYes] = useState("");
    const [errorAnswerNo, setErrorAnswerNo] = useState("");
    const [errorResultTitle, setErrorResultTitle] = useState("");
    const [errorResultDescription, setErrorResultDescription] = useState("");
    
    const handleQuestion = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 100) {
            setErrorQuestion("");
            setQuestion(inputText);
        };
    };

    const handleAnswerYes = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 10) {
            setErrorAnswerYes("");
            setAnswerYes(inputText);
        };
    };

    const handleAnswerNo = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 10) {
            setErrorAnswerNo("");
            setAnswerNo(inputText);
        };
    };

    const handleResultTitle = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 10) {
            setErrorResultTitle("");
            setResultTitle(inputText);
        };
    };

    const handleResultDescription = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 100) {
            setErrorResultDescription("");
            setResultDescription(inputText);
        };
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Input Validation

        /* 
            question limit 10-100
            yes 2-10
            no 2-10
            result title 2-10
            result desc 2-100
        */

        if (question.length < 10 || question.length > 100) {
            setErrorQuestion("min 10 characters");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        };

        if (answerYes.length < 2 || answerYes.length > 10) {
            setErrorAnswerYes("min 2 characters");
            window.scrollTo({ top: 10, behavior: 'smooth' });
            return;
        };

        if (answerNo.length < 2 || answerNo.length > 10) {
            setErrorAnswerNo("min 2 characters");
            window.scrollTo({ top: 10, behavior: 'smooth' });
            return;
        };

        if (resultTitle.length < 2 || resultTitle.length > 10) {
            setErrorResultTitle("min 2 characters");
            window.scrollTo({ top: 270, behavior: 'smooth' });
            return;
        };

        if (resultDescription.length < 2 || resultDescription.length > 100) {
            setErrorResultDescription("min 2 characters");
            window.scrollTo({ top: 400, behavior: 'smooth' });
            return;
        };

        // Should Emoji Banned?

        // Set Link
        const searchParams = new URLSearchParams({
            q: question,
            y: answerYes,
            n: answerNo,
            t: resultTitle,
            d: resultDescription
        });

        setLink(`${process.env.NEXT_PUBLIC_URL}/ask?${searchParams}`);
    };

    return (
        <div className="p-3 flex flex-col gap-5 font-poppins pb-10 pt-16">

            <p className="text-white self-center pt-5">
                made by ruiya on - 
                <a className="text-red-700" href="https://www.youtube.com/@ruuuruiya"> Youtube </a> 
                <a className="text-pink-400" href="https://www.instagram.com/ruuuruiya/">Instagram</a>
                <a className="text-pink-400" href="https://www.tiktok.com/@ruuuruiya"> TikTok </a> 
            </p>

            <h1 className="self-center my-8 text-center text-white text-2xl font-bold max-w-xs">
                Create Your Own Question!
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Question */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="question" className="font-medium text-white">
                        Question
                        <span className="text-dark-500 text-xs pl-3 italic font-normal">min 10 characters</span>
                    </label>
                    
                    <textarea
                        className={`p-3 border border-dark-900 rounded-md focus:outline-none placeholder:text-dark-700 focus:border-dark-500 resize-none bg-dark-900 text-white ${errorQuestion && "border-statusLate"}`}
                        rows={4}
                        id="question"
                        placeholder="I like you, would you like to be my-"
                        value={question}
                        onChange={handleQuestion}
                    />

                    <div className={`flex items-center ${errorQuestion ? "justify-between" : "justify-end"}`}>
                        {errorQuestion && <p className="text-statusLate text-xs">{errorQuestion}</p>}
                        <div className="text-dark-500 text-sm">{question.length}/100</div>
                    </div>
                </div>

                {/* Answer */}
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="answer" className="font-medium text-white">
                        Answer
                        <span className="text-dark-500 text-xs pl-3 italic font-normal">2-10 characters</span>
                    </label>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                className={`w-full p-3 border border-dark-900 rounded-md focus:outline-none placeholder:text-dark-700 focus:border-dark-500 bg-dark-900 text-white ${errorAnswerYes && "border-statusLate"}`}
                                type="text"
                                id="yes"
                                placeholder="Yes"
                                value={answerYes}
                                onChange={handleAnswerYes}
                            />
                            <div className="w-full min-h-[5rem] rounded-md p-2 flex items-center justify-center border-dark-500 bg-dark-700 text-white text-lg font-medium">
                                { answerYes }
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                className={`w-full p-3 border border-dark-900 rounded-md focus:outline-none placeholder:text-dark-700 focus:border-dark-500 bg-dark-900 text-white ${errorAnswerNo && "border-statusLate"}`}
                                type="text"
                                id="no"
                                placeholder="No"
                                value={answerNo}
                                onChange={handleAnswerNo}
                            />
                            <div className="w-full min-h-[5rem] rounded-md p-2 flex items-center justify-center border-dark-500 bg-dark-700 text-white text-lg font-medium">
                                { answerNo }
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Pop Up Result Title */}
                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="result" className="font-medium text-white">
                        Result
                        <span className="text-dark-500 text-xs pl-3 italic font-normal">min 2 characters</span>
                    </label>

                    <input
                        className={`p-3 border border-dark-900 rounded-md focus:outline-none placeholder:text-dark-700 focus:border-dark-500 bg-dark-900 text-white ${errorResultTitle && "border-statusLate"}`}
                        type="text"
                        id="title"
                        placeholder="Yeayy!"
                        value={resultTitle}
                        onChange={handleResultTitle}
                    />

                    <div className={`flex items-center ${errorResultTitle ? "justify-between" : "justify-end"}`}>
                        {errorResultTitle && <p className="text-statusLate text-xs">{errorResultTitle}</p>}
                        <div className="text-dark-500 text-sm">{resultTitle.length}/10</div>
                    </div>

                    <textarea
                        className={`mt-3 p-3 border border-dark-900 rounded-md focus:outline-none placeholder:text-dark-700 focus:border-dark-500 resize-none bg-dark-900 text-white ${errorResultDescription && "border-statusLate"}`}
                        rows={4}
                        id="question"
                        placeholder="Yeay! Now you are mine!"
                        value={resultDescription}
                        onChange={handleResultDescription}
                    />

                    <div className={`flex items-center ${errorResultDescription ? "justify-between" : "justify-end"}`}>
                        {errorResultDescription && <p className="text-statusLate text-xs">{errorResultDescription}</p>}
                        <div className="text-dark-500 text-sm">{resultDescription.length}/100</div>
                    </div>

                    {/* Preview */}
                    <div className="mt-3 bg-dark-700 text-white w-full p-3 min-h-[150px] rounded-md flex flex-col gap-3 relative break-all">
                        <div className="text-lg font-bold">
                            { resultTitle }
                        </div>

                        <svg className="absolute right-4 top-4" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

                        <hr />

                        <div className="">
                            { resultDescription }
                        </div>
                    </div>
                </div>


                <button type="submit" className="w-full mt-5 text-white rounded-md bg-dark-900 h-12 font-medium hover:bg-dark-500">
                    Generate Link
                </button>

            </form>

            <div className="w-full p-3 min-h-[10rem] bg-dark-900 rounded-md break-all">
                <p placeholder="click generate link!" className="text-white text-sm placeholder:text-dark-500">{link}</p>
            </div>

            <button onClick={handleCopy} className={`hidden md:block w-full text-white rounded-md  h-12 font-medium hover:bg-dark-500 ${copy ? "bg-dark-500" : "bg-dark-900"}`} aria-disabled={copy}>
                {copy ? "Copied!" : "Copy Link"}
            </button>

        </div>
    )
};

export default Page;