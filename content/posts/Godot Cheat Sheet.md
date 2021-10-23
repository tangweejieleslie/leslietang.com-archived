---
title: "Godot Cheat Sheet"
date: 2021-10-20
# time: 09:33
draft: true
tags: ["cheat sheet", "godot"]
categories: ["About Godot"]
# series: []
---

# About Signals
Reference: https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html
Godot's native implementation of observer pattern. 

```
# You'll need to set up a signal first
signal SignalName(signal_variables, v1, v2)

# And emit the signal, alongside the required variables
emit_signal("SignalName", signal_variables, v1, v2)

# In the node that will be receiving the signal, you'll need to set up a connection

# Syntax: <source_node>.connect(<signal_name>, <target_node>, <target_function_name>)
# Example
$Timer.connect("timeout", self, "_on_Timer_timeout")


```

# About Instance
This is just the syntax. 

1. preload the scene
2. create an instance
3. call the setters, or directly update the variables. Depending on your coding style
4. add the child into the scene tree

```
const MySmokeResource = preload("res://SmokeScene.tscn")

var GrabedInstance= MySmokeResource.instance() # You could now make changes to the new instance if you wanted 

CurrentEntry.name = "SmokeA" 


self.add_child(GrabedInstance) #Attach it to the tree 

```

