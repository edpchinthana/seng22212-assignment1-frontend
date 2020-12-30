export interface sensorRecode {
    capturedDate: string
    dataValue: number
    id: string
    sensorId: string
    threshold: number
    type: string
    unit: string
}

export interface SensorMeta {
    id: string
    title: string
    type: string
}
