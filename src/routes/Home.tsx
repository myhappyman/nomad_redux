import { useState } from "react";

function Home() {
    const [text, setText] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText("");
        console.log(text);
    };
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setText(e.target.value)
                    }
                />
                <button>추가</button>
            </form>
            <ul></ul>
        </div>
    );
}

export default Home;
