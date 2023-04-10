import {Fog, Group, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector3, WebGLRenderer} from "three";

let depth = 1400;

class Renderer {
    private renderer: WebGLRenderer;
    private camera: PerspectiveCamera;
    private scene: Scene;
    private group: Group;

    constructor() {
        this.initRenderer()
        const distance = window.innerWidth / 2 / Math.tan(Math.PI / 12);
        const zAxisNumber = Math.floor(distance - depth / 2);
        this.initCamera(zAxisNumber)
        this.initScene()
    }

    initRenderer() {
        this.renderer = new WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true,
        })
        // 定义渲染器的尺寸；在这里它会填满整个屏幕
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
    }

    initCamera(zAxisNumber: number) {
        const fov = 12;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1;
        const far = 30000;
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 0, zAxisNumber);
        this.camera.lookAt(new Vector3(0, 0, 0));
    }

    initScene() {
        this.scene = new Scene();
        // 在场景中添加雾的效果，Fog参数分别代表‘雾的颜色’、‘开始雾化的视线距离’、刚好雾化至看不见的视线距离’
        this.scene.fog = new Fog(0x000000, 0, 10000);
        this.group = new Group();
        this.scene.add(this.group);
    }
}