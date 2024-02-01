"use client"
import { useCallback, useEffect, useState, useTransition } from "react";
import { pcData } from "@/mock/pcData";
import { pcDataType } from "@/type/pcData";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Search_sect from "@/components/Search_sect/Search_sect";
import { useStateContext } from "@/context";

export default function Home() {
  const { showSearch } = useStateContext();
  const [isPending, startTransition] = useTransition()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [currentList, setCurrentList] = useState<pcDataType[]>([])
  const showPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, [currentIndex])
  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pcData.length - itemsToShow));
  }, [currentIndex, itemsToShow])
  const updateCurrentList = useCallback(() => {
    startTransition(() => {
      let updatedVal = pcData.slice(currentIndex, currentIndex + itemsToShow)
      setCurrentList(updatedVal)
    })
  }, [currentIndex, itemsToShow]);

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
      updateCurrentList()
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCurrentList]);

  useEffect(() => {
    updateCurrentList()
  }, [currentIndex, itemsToShow, updateCurrentList])

  return (
    <main className="flex min-h-screen w-full flex-col items-center pt-20">
      {showSearch && <Search_sect />}
      {pcData.length > 4 &&
        <div className="w-full p-2 flex flex-row ">
          <Button name={`<`} action={showPrevious} />
          <Button name={`>`} action={showNext} />
        </div>}
      <div className="flex justify-between p-4">
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

