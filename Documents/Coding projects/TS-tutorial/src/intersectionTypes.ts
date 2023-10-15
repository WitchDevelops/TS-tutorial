type Draggable = {
    drag: ()   => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable; // intersection type

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}