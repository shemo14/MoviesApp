package com.moviesapp

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

class PosterViewManager : ViewGroupManager<PosterView>() {

    override fun getName(): String {
        return "PosterView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): PosterView {
        return PosterView(reactContext)
    }

    @ReactProp(name = "imageUrl")
    fun setImageUrl(view: PosterView, imageUrl: String?) {
        view.setImageUrl(imageUrl ?: "")
    }
}
