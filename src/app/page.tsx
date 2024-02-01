"use client"
import { useCallback, useEffect, useState, useTransition } from "react";
import { pcDataType } from "@/type/pcData";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import { useStateContext } from "@/context";

export default function Home() {
  const { typedList, handleSelectType } = useStateContext();
  const [isPending, startTransition] = useTransition()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [currentList, setCurrentList] = useState<pcDataType[]>([])
  const showPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }
  const showNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, typedList.length - itemsToShow));
  }
  const updateCurrentList = useCallback(() => {
    startTransition(() => {
      let updatedVal = typedList.slice(currentIndex, currentIndex + itemsToShow)
      if (updatedVal.length === 0) {
        updatedVal = typedList.slice(typedList.length - itemsToShow, currentIndex + itemsToShow)
      }
      setCurrentList(updatedVal)
    })
  }, [currentIndex, itemsToShow, typedList.length]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let amountToShow = 4;
      if (screenWidth < 768) {
        console.log('48', screenWidth)
        amountToShow = 1;
      } else {
        if (typedList.length <= 4) {
          amountToShow = typedList.length;
        } else {
          amountToShow = Math.min(4, Math.floor(screenWidth / 450));
        }
      }
      setItemsToShow(amountToShow);
      updateCurrentList()
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCurrentList, typedList.length]);

  useEffect(() => {
    updateCurrentList()
  }, [currentIndex, itemsToShow, updateCurrentList, typedList.length])

  return (
    <main className="flex min-h-screen w-full flex-col items-center pt-20">
      <div className="fixed top-32 left-0 p-2 flex flex-col z-20 ">
        {typedList.length > itemsToShow &&
          <div className="flex flex-row">
            <Button name={`<`} size="half" action={showPrevious} />
            <Button name={`>`} size="half" action={showNext} />
          </div>
        }

        <Button name="All" action={() => handleSelectType("all")} />
        <Button name="Prebuilt" action={() => handleSelectType("prebuilt")} />
        <Button name="Custom" action={() => handleSelectType("custom")} />
      </div>
      <div className="flex justify-between pb-8 pt-16 ">
        {isPending && <span>Loading...</span>}
        {!isPending && !currentList.length && <span>No data available.</span>}
        {!isPending && !!currentList.length && currentList.map((item: pcDataType) => {
          return (
            <div
              key={item.id}
              className={`w-full md:flex-1`}
            >
              <Card data={item} />
            </div>
          )
        })}
      </div>
    </main>
  );
}

