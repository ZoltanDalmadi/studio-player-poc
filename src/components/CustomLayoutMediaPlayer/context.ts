import { createContext } from "react";
import { PlayerContextType } from "./types";

const DataContext = createContext<PlayerContextType>({ showMarkers: false });

export default DataContext;
