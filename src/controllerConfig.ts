export interface LayoutButtonList {
    id: number;
    name: string;
    layout: 1 | 3 | 5 | 10;
}

export interface RadioList {
    id: number;
    name: string;
}

interface ControllerConfig {
    layouts: LayoutButtonList[];
    animationModes: RadioList[];
    shapes: RadioList[];
}

const controllerConfig: ControllerConfig = {
    layouts: [
        {
            id: 1,
            name: '1x1',
            layout: 1
        },
        {
            id: 2,
            name: '3x3',
            layout: 3
        },
        {
            id: 3,
            name: '5x5',
            layout: 5
        },
        {
            id: 4,
            name: '10x10',
            layout: 10
        }
    ],
    animationModes: [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'Random'
        }
    ],
    shapes: [
        {
            id: 1,
            name: 'Rectangle'
        },
        {
            id: 2,
            name: 'Heart'
        }
    ]
};

export default controllerConfig;
export { controllerConfig };
