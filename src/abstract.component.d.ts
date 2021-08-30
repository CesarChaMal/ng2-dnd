import { ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DragDropConfig, DragImage } from './dnd.config';
import { DragDropService } from './dnd.service';
import * as i0 from "@angular/core";
export declare abstract class AbstractComponent {
    private elemRef;
    _dragDropService: DragDropService;
    _config: DragDropConfig;
    private _cdr;
    _elem: HTMLElement;
    _dragHandle: HTMLElement;
    _dragHelper: HTMLElement;
    _defaultCursor: string;
    /**
     * Last element that was mousedown'ed
     */
    _target: EventTarget;
    /**
     * Whether the object is draggable. Default is true.
     */
    private _dragEnabled;
    set dragEnabled(enabled: boolean);
    get dragEnabled(): boolean;
    /**
     * Allows drop on this element
     */
    dropEnabled: boolean;
    /**
     * Drag effect
     */
    effectAllowed: string;
    /**
     * Drag cursor
     */
    effectCursor: string;
    /**
     * Restrict places where a draggable element can be dropped. Either one of
     * these two mechanisms can be used:
     *
     * - dropZones: an array of strings that permits to specify the drop zones
     *   associated with this component. By default, if the drop-zones attribute
     *   is not specified, the droppable component accepts drop operations by
     *   all the draggable components that do not specify the allowed-drop-zones
     *
     * - allowDrop: a boolean function for droppable components, that is checked
     *   when an item is dragged. The function is passed the dragData of this
     *   item.
     *   - if it returns true, the item can be dropped in this component
     *   - if it returns false, the item cannot be dropped here
     */
    allowDrop: (dropData: any) => boolean;
    dropZones: string[];
    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and optional offset by x and y:
     *   let myDragImage: DragImage = new DragImage("/images/simpler1.png", 0, 0);
     * ...
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="myDragImage">
     * ...
     * - The custom function to return the value of dragImage programmatically:
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="getDragImage(someData)">
     * ...
     *   getDragImage(value:any): string {
     *     return value ? "/images/simpler1.png" : "/images/simpler2.png"
     *   }
     */
    dragImage: string | DragImage | Function;
    cloneItem: boolean;
    constructor(elemRef: ElementRef, _dragDropService: DragDropService, _config: DragDropConfig, _cdr: ChangeDetectorRef);
    setDragHandle(elem: HTMLElement): void;
    /******* Change detection ******/
    detectChanges(): void;
    private _onDragEnter;
    private _onDragOver;
    private _onDragLeave;
    private _onDrop;
    private _isDropAllowed;
    private _preventAndStop;
    private _onDragStart;
    private _onDragEnd;
    _onDragEnterCallback(event: Event): void;
    _onDragOverCallback(event: Event): void;
    _onDragLeaveCallback(event: Event): void;
    _onDropCallback(event: Event): void;
    _onDragStartCallback(event: Event): void;
    _onDragEndCallback(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<AbstractComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AbstractComponent, never, never, {}, {}, never>;
}
export declare class AbstractHandleComponent {
    private elemRef;
    _dragDropService: DragDropService;
    _config: DragDropConfig;
    private _Component;
    private _cdr;
    _elem: HTMLElement;
    constructor(elemRef: ElementRef, _dragDropService: DragDropService, _config: DragDropConfig, _Component: AbstractComponent, _cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<AbstractHandleComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AbstractHandleComponent, never, never, {}, {}, never>;
}
