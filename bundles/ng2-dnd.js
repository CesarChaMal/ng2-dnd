System.registerDynamic("src/dnd.droppable", ["angular2/core", "./dnd.common", "./dnd.draggable"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var dnd_common_1 = $__require('./dnd.common');
  var dnd_draggable_1 = $__require('./dnd.draggable');
  var DroppableComponent = (function(_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, ddZonesService, dragDropService, dragDropConfigService) {
      var _this = this;
      _super.call(this, elemRef, ddZonesService, dragDropConfigService.dragDropConfig);
      this.dragDropService = dragDropService;
      this.onDragEnterCallback = function(event) {
        _this.elem.classList.add(_this.ddConfig.onDragEnterClass);
      };
      this.onDragLeaveCallback = function(event) {
        _this.elem.classList.remove(_this.ddConfig.onDragOverClass);
        _this.elem.classList.remove(_this.ddConfig.onDragEnterClass);
      };
      this.onDragOverCallback = function(event) {
        _this.elem.classList.add(_this.ddConfig.onDragOverClass);
      };
      this.onDropCallback = function(event) {
        if (_this.onDropSuccessCallback) {
          _this.onDropSuccessCallback({'data': _this.dragDropService.draggableData});
        }
        if (_this.dragDropService.onDragSuccessCallback) {
          _this.dragDropService.onDragSuccessCallback();
        }
        _this.elem.classList.remove(_this.ddConfig.onDragOverClass);
        _this.elem.classList.remove(_this.ddConfig.onDragEnterClass);
      };
      this.dragdropConfig = dragDropConfigService.dragDropConfig;
      this.dropEnabled = true;
    }
    Object.defineProperty(DroppableComponent.prototype, "dragdropConfig", {
      set: function(config) {
        if (config) {
          this.config = this.ddConfig = config;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropZones", {
      set: function(dropZoneNames) {
        this.dropZoneNames = dropZoneNames;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input("on-drop-success"), __metadata('design:type', Function)], DroppableComponent.prototype, "onDropSuccessCallback", void 0);
    __decorate([core_1.Input("ui-droppable"), __metadata('design:type', dnd_draggable_1.DragDropConfig), __metadata('design:paramtypes', [dnd_draggable_1.DragDropConfig])], DroppableComponent.prototype, "dragdropConfig", null);
    __decorate([core_1.Input("drop-zones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], DroppableComponent.prototype, "dropZones", null);
    DroppableComponent = __decorate([core_1.Directive({selector: '[ui-droppable]'}), __metadata('design:paramtypes', [core_1.ElementRef, dnd_common_1.DragDropZonesService, dnd_draggable_1.DragDropDataService, dnd_draggable_1.DragDropConfigService])], DroppableComponent);
    return DroppableComponent;
  })(dnd_common_1.AbstractDraggableDroppableComponent);
  exports.DroppableComponent = DroppableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.common", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var DragDropZonesService = (function() {
    function DragDropZonesService() {
      this.allowedDropZones = [];
    }
    DragDropZonesService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropZonesService);
    return DragDropZonesService;
  })();
  exports.DragDropZonesService = DragDropZonesService;
  var DragImage = (function() {
    function DragImage(imageElement, x_offset, y_offset) {
      if (x_offset === void 0) {
        x_offset = 0;
      }
      if (y_offset === void 0) {
        y_offset = 0;
      }
      this.imageElement = imageElement;
      this.x_offset = x_offset;
      this.y_offset = y_offset;
    }
    DragImage = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [HTMLElement, Number, Number])], DragImage);
    return DragImage;
  })();
  exports.DragImage = DragImage;
  var BaseDDConfig = (function() {
    function BaseDDConfig() {
      this.dragEffect = DataTransferEffect.MOVE;
      this.dropEffect = DataTransferEffect.MOVE;
      this.dragCursor = "move";
    }
    BaseDDConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], BaseDDConfig);
    return BaseDDConfig;
  })();
  exports.BaseDDConfig = BaseDDConfig;
  var DataTransferEffect = (function() {
    function DataTransferEffect(name) {
      this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    DataTransferEffect = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [String])], DataTransferEffect);
    return DataTransferEffect;
  })();
  exports.DataTransferEffect = DataTransferEffect;
  var DraggableElementHandler = (function() {
    function DraggableElementHandler(draggableComponent) {
      this.draggableComponent = draggableComponent;
      this.defaultCursor = draggableComponent.elem.style.cursor;
    }
    DraggableElementHandler.prototype.refresh = function() {
      this.draggableComponent.elem.draggable = this.draggableComponent.dragEnabled;
      if (this.draggableComponent.config.dragCursor != null) {
        this.draggableComponent.elem.style.cursor = this.draggableComponent.dragEnabled ? this.draggableComponent.config.dragCursor : this.defaultCursor;
      }
    };
    DraggableElementHandler = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [AbstractDraggableDroppableComponent])], DraggableElementHandler);
    return DraggableElementHandler;
  })();
  exports.DraggableElementHandler = DraggableElementHandler;
  var SortableConfig = (function(_super) {
    __extends(SortableConfig, _super);
    function SortableConfig() {
      _super.apply(this, arguments);
      this.onSortableDragClass = "ui-sortable-drag";
    }
    SortableConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], SortableConfig);
    return SortableConfig;
  })(BaseDDConfig);
  exports.SortableConfig = SortableConfig;
  var AbstractDraggableDroppableComponent = (function() {
    function AbstractDraggableDroppableComponent(elemRef, ddZonesService, config) {
      var _this = this;
      this.ddZonesService = ddZonesService;
      this._dropZoneNames = [Math.random().toString()];
      this._dragEnabled = false;
      this.dropEnabled = false;
      this.onDragEnterCallback = function(event) {};
      this.onDragOverCallback = function(event) {};
      this.onDragLeaveCallback = function(event) {};
      this.onDropCallback = function(event) {};
      this.onDragStartCallback = function(event) {};
      this.onDragEndCallback = function(event) {};
      this.elem = elemRef.nativeElement;
      this._draggableHandler = new DraggableElementHandler(this);
      this.config = config;
      {
        this.elem.ondragenter = this._onDragEnter;
        this.elem.ondragover = function(event) {
          _this._onDragOver(event);
          if (event.dataTransfer != null) {
            event.dataTransfer.dropEffect = config.dropEffect.name;
          }
        };
        this.elem.ondragleave = this._onDragLeave;
        this.elem.ontouchstart = this._onDragEnter;
        this.elem.ontouchend = this._onDragLeave;
        this.elem.ondrop = this._onDrop;
      }
      {
        this.elem.ondragstart = function(event) {
          _this._onDragStart(event);
          if (event.dataTransfer != null) {
            event.dataTransfer.effectAllowed = _this.config.dragEffect.name;
            event.dataTransfer.setData('text/html', '');
            if (_this.config.dragImage != null) {
              var dragImage = _this.config.dragImage;
              event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
            }
          }
        };
        this.elem.ondragend = this._onDragEnd;
        this.elem.ontouchstart = this._onDragStart;
        this.elem.ontouchend = this._onDragEnd;
      }
    }
    Object.defineProperty(AbstractDraggableDroppableComponent.prototype, "dropZoneNames", {
      get: function() {
        return this._dropZoneNames;
      },
      set: function(names) {
        this._dropZoneNames = names;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AbstractDraggableDroppableComponent.prototype, "config", {
      get: function() {
        return this._config;
      },
      set: function(config) {
        this._config = config;
        this._draggableHandler.refresh();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AbstractDraggableDroppableComponent.prototype, "dragEnabled", {
      get: function() {
        return this._dragEnabled;
      },
      set: function(enabled) {
        this._dragEnabled = enabled;
        this._draggableHandler.refresh();
      },
      enumerable: true,
      configurable: true
    });
    AbstractDraggableDroppableComponent.prototype._onDragEnter = function(event) {
      if (!this.dropEnabled || !this.isDropAllowed()) {
        return;
      }
      console.log("'dragEnter' event");
      event.preventDefault();
      this.onDragEnterCallback(event);
    };
    AbstractDraggableDroppableComponent.prototype._onDragOver = function(event) {
      if (!this.dropEnabled || !this.isDropAllowed()) {
        return;
      }
      console.log("'dragOver' event");
      event.preventDefault();
      this.onDragOverCallback(event);
    };
    AbstractDraggableDroppableComponent.prototype._onDragLeave = function(event) {
      if (!this.dropEnabled || !this.isDropAllowed()) {
        return;
      }
      console.log("'dragLeave' event");
      this.onDragLeaveCallback(event);
    };
    AbstractDraggableDroppableComponent.prototype._onDrop = function(event) {
      if (!this.dropEnabled || !this.isDropAllowed()) {
        return;
      }
      console.log("'drop' event");
      this.onDropCallback(event);
    };
    AbstractDraggableDroppableComponent.prototype.isDropAllowed = function() {
      if (this._dropZoneNames.length === 0 && this.ddZonesService.allowedDropZones.length === 0) {
        return true;
      }
      for (var dragZone in this.ddZonesService.allowedDropZones) {
        if (this._dropZoneNames.indexOf(dragZone) !== -1) {
          return true;
        }
      }
      return false;
    };
    AbstractDraggableDroppableComponent.prototype._onDragStart = function(event) {
      if (!this._dragEnabled) {
        return;
      }
      console.log("'dragStart' event");
      this.ddZonesService.allowedDropZones = this._dropZoneNames;
      this.onDragStartCallback(event);
    };
    AbstractDraggableDroppableComponent.prototype._onDragEnd = function(event) {
      console.log("'dragEnd' event");
      this.ddZonesService.allowedDropZones = [];
      this.onDragEndCallback(event);
    };
    AbstractDraggableDroppableComponent = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [core_1.ElementRef, DragDropZonesService, BaseDDConfig])], AbstractDraggableDroppableComponent);
    return AbstractDraggableDroppableComponent;
  })();
  exports.AbstractDraggableDroppableComponent = AbstractDraggableDroppableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.draggable", ["angular2/core", "./dnd.common"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var core_2 = $__require('angular2/core');
  var dnd_common_1 = $__require('./dnd.common');
  var DragDropConfig = (function(_super) {
    __extends(DragDropConfig, _super);
    function DragDropConfig() {
      _super.apply(this, arguments);
      this.onDragStartClass = "ui-drag-start";
      this.onDragEnterClass = "ui-drag-enter";
      this.onDragOverClass = "ui-drag-over";
    }
    DragDropConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropConfig);
    return DragDropConfig;
  })(dnd_common_1.BaseDDConfig);
  exports.DragDropConfig = DragDropConfig;
  var DragDropDataService = (function() {
    function DragDropDataService() {}
    DragDropDataService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropDataService);
    return DragDropDataService;
  })();
  exports.DragDropDataService = DragDropDataService;
  var DragDropConfigService = (function() {
    function DragDropConfigService() {
      this.dragDropConfig = new DragDropConfig();
      this.sortableConfig = new dnd_common_1.SortableConfig();
    }
    DragDropConfigService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropConfigService);
    return DragDropConfigService;
  })();
  exports.DragDropConfigService = DragDropConfigService;
  var DraggableComponent = (function(_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, ddZonesService, dragDropService, dragDropConfigService) {
      var _this = this;
      _super.call(this, elemRef, ddZonesService, dragDropConfigService.dragDropConfig);
      this.dragDropService = dragDropService;
      this.onDragEndCallback = function(event) {
        _this.dragDropService.draggableData = null;
        _this.dragDropService.onDragSuccessCallback = null;
        var dragTarget = event.target;
        dragTarget.classList.remove(_this.ddConfig.onDragStartClass);
      };
      this.onDragStartCallback = function(event) {
        _this.dragDropService.draggableData = _this.draggableData;
        _this.dragDropService.onDragSuccessCallback = _this.onDragSuccessCallback;
        var dragTarget = event.target;
        dragTarget.classList.add(_this.ddConfig.onDragStartClass);
      };
      this.dragdropConfig = dragDropConfigService.dragDropConfig;
      this.dragEnabled = true;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
      set: function(value) {
        if (value !== null) {
          this.dragEnabled = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dragdropConfig", {
      set: function(config) {
        if (config) {
          this.config = this.ddConfig = config;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropZones", {
      set: function(dropZones) {
        this.dropZoneNames = dropZones;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_2.Input("draggable-enabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], DraggableComponent.prototype, "draggable", null);
    __decorate([core_2.Input("draggable-data"), __metadata('design:type', Object)], DraggableComponent.prototype, "draggableData", void 0);
    __decorate([core_2.Input("ui-draggable"), __metadata('design:type', DragDropConfig), __metadata('design:paramtypes', [DragDropConfig])], DraggableComponent.prototype, "dragdropConfig", null);
    __decorate([core_2.Input("on-drag-success"), __metadata('design:type', Function)], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([core_2.Input("allowed-drop-zones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], DraggableComponent.prototype, "dropZones", null);
    DraggableComponent = __decorate([core_2.Directive({selector: '[ui-draggable]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_common_1.DragDropZonesService, DragDropDataService, DragDropConfigService])], DraggableComponent);
    return DraggableComponent;
  })(dnd_common_1.AbstractDraggableDroppableComponent);
  exports.DraggableComponent = DraggableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.sortable", ["angular2/core", "./dnd.common", "./dnd.draggable"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var core_2 = $__require('angular2/core');
  var dnd_common_1 = $__require('./dnd.common');
  var dnd_draggable_1 = $__require('./dnd.draggable');
  var DragDropSortableDataService = (function() {
    function DragDropSortableDataService() {}
    DragDropSortableDataService.prototype.element = function(elem, config) {
      if (this._elem != null) {
        this._elem.classList.remove(this._config.onSortableDragClass);
      }
      if (elem != null) {
        this._elem = elem;
        this._config = config;
        this._elem.classList.add(this._config.onSortableDragClass);
      }
    };
    DragDropSortableDataService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropSortableDataService);
    return DragDropSortableDataService;
  })();
  exports.DragDropSortableDataService = DragDropSortableDataService;
  var SortableComponent = (function(_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, ddZonesService, dragDropConfigService, sortableDataService) {
      var _this = this;
      _super.call(this, elemRef, ddZonesService, new dnd_common_1.BaseDDConfig());
      this.sortableDataService = sortableDataService;
      this._sortableData = [];
      this.onDragEnterCallback = function(event) {
        console.log('drag node [' + _this.sortableDataService.index.toString() + '] over parent node');
        _this._sortableData.push(_this.sortableDataService.sortableData.splice(_this.sortableDataService.index, 1));
        _this.sortableDataService.sortableData = _this._sortableData;
        _this.sortableDataService.index = 0;
      };
      this.onSortableDataChange = function() {
        _this.dropEnabled = _this._sortableData.length === 0;
        console.log("collection is changed, drop enabled: " + _this.dropEnabled.toString());
      };
      this.sortableConfig = dragDropConfigService.sortableConfig;
    }
    Object.defineProperty(SortableComponent.prototype, "sortableData", {
      get: function() {
        return this._sortableData;
      },
      set: function(sortableData) {
        this._sortableData = sortableData;
        this.onSortableDataChange();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "sortableConfig", {
      set: function(config) {
        if (config) {
          this.config = this._sortableConfig = config;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "sortableZones", {
      get: function() {
        return this.dropZoneNames;
      },
      set: function(dropZones) {
        this.dropZoneNames = dropZones;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_2.Input("ui-sortable-data"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], SortableComponent.prototype, "sortableData", null);
    __decorate([core_2.Input("ui-sortable"), __metadata('design:type', dnd_common_1.SortableConfig), __metadata('design:paramtypes', [dnd_common_1.SortableConfig])], SortableComponent.prototype, "sortableConfig", null);
    __decorate([core_2.Input("ui-sortable-zones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], SortableComponent.prototype, "sortableZones", null);
    SortableComponent = __decorate([core_2.Directive({selector: '[ui-sortable]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_common_1.DragDropZonesService, dnd_draggable_1.DragDropConfigService, DragDropSortableDataService])], SortableComponent);
    return SortableComponent;
  })(dnd_common_1.AbstractDraggableDroppableComponent);
  exports.SortableComponent = SortableComponent;
  var SortableItemComponent = (function(_super) {
    __extends(SortableItemComponent, _super);
    function SortableItemComponent(sortableComponent, sortableDataService, elemRef, ddZonesService, ddcService) {
      var _this = this;
      _super.call(this, elemRef, ddZonesService, ddcService.sortableConfig);
      this.sortableComponent = sortableComponent;
      this.sortableDataService = sortableDataService;
      this.onDragStartCallback = function(event) {
        console.log('dragging elem with index ' + _this.index.toString());
        _this.sortableDataService.sortableData = _this.sortableComponent._sortableData;
        _this.sortableDataService.index = _this.index;
        _this.sortableDataService.element(_this.elem, _this.sortableComponent._sortableConfig);
      };
      this.onDragOverCallback = function(event) {
        if (_this.elem != _this.sortableDataService._elem) {
          _this.sortableDataService.sortableData = _this.sortableComponent._sortableData;
          _this.sortableDataService.index = _this.index;
          _this.sortableDataService.element(_this.elem, _this.sortableComponent._sortableConfig);
        }
      };
      this.onDragEndCallback = function(event) {
        _this.sortableDataService.sortableData = null;
        _this.sortableDataService.index = null;
        _this.sortableDataService.element(null, _this.sortableComponent._sortableConfig);
      };
      this.onDragEnterCallback = function(event) {
        _this.sortableDataService.element(_this.elem, _this.sortableComponent._sortableConfig);
        if ((_this.index != _this.sortableDataService.index) || (_this.sortableDataService.sortableData != _this.sortableComponent._sortableData)) {
          console.log('drag node [' + _this.index.toString() + '] over node [' + _this.sortableDataService.index.toString() + ']');
          _this.sortableComponent._sortableData.splice(_this.index, 0, _this.sortableDataService.sortableData.splice(_this.sortableDataService.index, 1));
          _this.sortableDataService.sortableData = _this.sortableComponent._sortableData;
          _this.sortableDataService.index = _this.index;
        }
      };
      this.dropZoneNames = this.sortableComponent.dropZoneNames;
      this.dragEnabled = true;
      this.dropEnabled = true;
    }
    __decorate([core_2.Input('ui-sortable-item'), __metadata('design:type', Number)], SortableItemComponent.prototype, "index", void 0);
    SortableItemComponent = __decorate([core_2.Directive({selector: '[ui-sortable-item]'}), __metadata('design:paramtypes', [SortableComponent, DragDropSortableDataService, core_2.ElementRef, dnd_common_1.DragDropZonesService, dnd_draggable_1.DragDropConfigService])], SortableItemComponent);
    return SortableItemComponent;
  })(dnd_common_1.AbstractDraggableDroppableComponent);
  exports.SortableItemComponent = SortableItemComponent;
  return module.exports;
});

System.registerDynamic("ng2-dnd", ["./src/dnd.common", "./src/dnd.draggable", "./src/dnd.droppable", "./src/dnd.sortable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var dnd_common_1 = $__require('./src/dnd.common');
  var dnd_draggable_1 = $__require('./src/dnd.draggable');
  var dnd_droppable_1 = $__require('./src/dnd.droppable');
  var dnd_sortable_1 = $__require('./src/dnd.sortable');
  __export($__require('./src/dnd.common'));
  __export($__require('./src/dnd.draggable'));
  __export($__require('./src/dnd.droppable'));
  __export($__require('./src/dnd.sortable'));
  exports.DND_PROVIDERS = [dnd_common_1.DragDropZonesService, dnd_draggable_1.DragDropDataService, dnd_draggable_1.DragDropConfigService, dnd_sortable_1.DragDropSortableDataService];
  exports.DND_DIRECTIVES = [dnd_draggable_1.DraggableComponent, dnd_droppable_1.DroppableComponent, dnd_sortable_1.SortableComponent, dnd_sortable_1.SortableItemComponent];
  return module.exports;
});
