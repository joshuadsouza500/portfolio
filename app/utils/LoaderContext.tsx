"use client";
import { createContext, useContext, useState } from "react";

type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined,
);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

{
  /**
The TypeScript error occurs because the LoaderContext is defined as potentially undefined. This means TypeScript requires you to handle the case where the context is not provided.
handle the undefined case when accessing the context. The best practice is to create a custom hook that checks if the context is undefined and throws an error if it is. */
}
export const useLoader = () => {
  const context = useContext(LoaderContext);

  // If context is undefined, throw an error
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context; // This is guaranteed to be LoaderContextType
};
