"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Leftbar({ open, selected, onClose }: any) {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        fetch("/mock/trails.json")
            .then( r => r.json())
            .then(setTrails);
    }, []);

    return (
        <div>
            <button>
                hide
            </button>
            <h2>trails</h2>

            <div>
                {trails.map((t: any) => (
                    <div key={t.id}>
                        <Link href={`/trails/${t.id}`}>
                            <h3>{t.name}</h3>
                            <p>{t.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}