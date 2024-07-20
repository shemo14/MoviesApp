package com.moviesapp

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.AttributeSet
import android.view.Gravity
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.ProgressBar
import java.io.InputStream
import java.net.HttpURLConnection
import java.net.URL

class PosterView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : FrameLayout(context, attrs, defStyleAttr) {

    private val imageView: ImageView = ImageView(context)
    private val progressBar: ProgressBar = ProgressBar(context)

    init {
        initView()
    }

    private fun initView() {
        progressBar.isIndeterminate = true
        progressBar.visibility = VISIBLE

        val imageParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
        imageView.layoutParams = imageParams

        val progressParams = LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT)
        progressParams.gravity = Gravity.CENTER
        progressBar.layoutParams = progressParams

        addView(imageView)
        addView(progressBar)
    }

    fun setImageUrl(url: String) {
        Thread {
            try {
                val imageUrl = URL(url)
                val connection = imageUrl.openConnection() as HttpURLConnection
                connection.doInput = true
                connection.connect()
                val input: InputStream = connection.inputStream
                val bitmap: Bitmap = BitmapFactory.decodeStream(input)
                post {
                    imageView.setImageBitmap(bitmap)
                    progressBar.visibility = GONE
                }
            } catch (e: Exception) {
                e.printStackTrace()
                post { progressBar.visibility = GONE }
            }
        }.start()
    }

}