"use client"
import { useCallback, useEffect, useState } from "react";
import { pcData } from "@/mock/pcData";
import { pcDataType } from "@/type/pcData";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const showPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, [currentIndex])
  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pcData.length - itemsToShow));
  }, [currentIndex, itemsToShow])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let amountToShow = 4;
      if (screenWidth < 768) {
        amountToShow = 1;
      } else {
        if (pcData.length <= 4) {
          amountToShow = pcData.length;
        } else {
          amountToShow = Math.min(4, Math.floor(screenWidth / 420));
        }
      }
      setItemsToShow(amountToShow);

    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between ">
      {pcData.length > 4 &&
        <div className="w-full p-2 flex flex-row justify-end">
          <Button name={`<`} action={showPrevious} />
          <Button name={`>`} action={showNext} />
        </div>}
      <div className="flex overflow-hidden justify-between">
        {pcData.slice(currentIndex, currentIndex + itemsToShow).map((item: pcDataType) => {
          return (
            <div
              key={item.id}
              className="w-full md:w-1/4 transition-transform duration-300 transform translate-x-0"
            >
              <Card data={item} />
            </div>
          )
        })}
      </div>
    </main>
  );
}

