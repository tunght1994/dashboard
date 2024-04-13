import React, { useEffect, useRef } from "react";

const EPSILON = 10;

const useScrollEnd = (
  scrollEleRef,
  callback,
  dependencies = [],
  dependenciesScroll = []
) => {
  const isRunningCallback = useRef(false);
  const callbackRef = useRef(callback);
  const lastScrollTop = useRef(0);
  const timer = useRef(null);

  const scrollHeightScrolled = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, dependencies);

  useEffect(() => {
    const scrollEle = scrollEleRef.current;
    if (!scrollEle) return;
    const _handleDelayScroll = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const element = scrollEleRef.current;
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const clientHeight = element.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight - EPSILON && scrollHeight != scrollHeightScrolled.current) {
            console.log(scrollHeightScrolled.current )
          scrollHeightScrolled.current = scrollHeight;

          callbackRef.current();
        }
      }, 100);
    };
    // const _handleScroll = () => {
    //   if (isRunningCallback.current) return;
    //   // check scroll down
    //   const valueCheck = scrollEle.scrollTop;
    //   const isScrollDown = valueCheck >= lastScrollTop.current;
    //   // console.log('isScrollDown', isScrollDown)
    //   lastScrollTop.current = valueCheck <= 0 ? 0 : valueCheck;
    //   if (!isScrollDown) {
    //     return;
    //   }
    //   // console.log(valueCheck, "-", lastScrollTop.current)

    //   // check to end of scroll
    //   const { scrollHeight, scrollTop, clientHeight } = scrollEle;
    //   const condActiveCallback =
    //     scrollHeight - scrollTop - clientHeight <= EPSILON;
    //   if (!condActiveCallback) return;
    //   isRunningCallback.current = true;
    //   callbackRef.current(() => {
    //     isRunningCallback.current = false;
    //   });
    // };
    scrollEle.addEventListener("scroll", _handleDelayScroll);
    return () => {
      clearTimeout(timer.current);
      scrollEle.removeEventListener("scroll", _handleDelayScroll);
    };
  }, dependenciesScroll);
};

export default useScrollEnd;