<template>
  <div class="richtext-container richtext-content">
    <div v-if="editor">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-bold`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.bold.tooltip') }}</span>
      </v-tooltip>
      
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-italic`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.italic.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('underline') }" @click="editor.chain().focus().toggleUnderline().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-underline`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.underline.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'left' }) }" @click="editor.isActive({ textAlign: 'left' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('left').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-left`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.align_left.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'center' }) }" @click="editor.isActive({ textAlign: 'center' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('center').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-center`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.align_center.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'right' }) }" @click="editor.isActive({ textAlign: 'right' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('right').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-right`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.align_right.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ dir: 'ltr' }) }" @click="editor.isActive({ dir: 'ltr' }) ? editor.chain().focus().setTextDirection('auto').run() : editor.chain().focus().setTextDirection('ltr').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-pilcrow-arrow-right`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.dir_ltr.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ dir: 'rtl' }) }" @click="editor.isActive({ dir: 'rtl' }) ? editor.chain().focus().setTextDirection('auto').run() : editor.chain().focus().setTextDirection('rtl').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-pilcrow-arrow-left`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.dir_rtl.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('subscript') }" @click="editor.chain().focus().toggleSubscript().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-subscript`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.subscript.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('superscript') }" @click="editor.chain().focus().toggleSuperscript().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-superscript`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.supscript.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('orderedList') }" @click="editor.chain().focus().toggleOrderedList().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-list-numbered`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.list_numbered.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-list-bulleted`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.list_bulleted.tooltip') }}</span>
      </v-tooltip>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :class="{ 'v-btn--active': editor.isActive('code') }" v-bind="attrs" v-on="on" icon>
                  <v-icon v-text="`mdi-table`" />
                </v-btn>
              </template>
              <span>{{ $t('richtext.table.tooltip') }}</span>
            </v-tooltip>
          </span>
        </template>
        <v-card>
          <v-card-text class="pa-3">
            <div v-for="(row, index) in tableCells.rows" :key="index" style="height: 12px">
              <span v-for="(col, index) in tableCells.cols" :key="index" class="table-insert-cells" :class="{'active' : tableCells.row >= row && tableCells.col >= col }" @mouseover="tableCellsHover(row, col)" @click="editor.chain().focus().insertTable({ rows: row, cols: col, withHeaderRow: true }).run()" role="button"></span>
            </div>
            <div class="text-center mt-1">
              {{ tableCells.row }} x {{ tableCells.col }}
            </div>
          </v-card-text>
        </v-card>
      </v-menu>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('blockquote') }" @click="editor.chain().focus().toggleBlockquote().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-quote-close`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.quote.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('code') }" @click="editor.chain().focus().toggleCode().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-code-tags`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.code.tooltip') }}</span>
      </v-tooltip>

      <v-dialog v-model="linkDialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :class="{ 'v-btn--active': editor.isActive('link') }"  v-bind="attrs" v-on="on" icon>
                  <v-icon v-text="`mdi-link-variant`" />
                </v-btn>
              </template>
              <span>{{ $t('richtext.link.tooltip') }}</span>
            </v-tooltip>
          </span>
        </template>

        <v-card>
          <v-card-title v-text="$t('richtext.link.title')" />

          <v-card-text>
            <v-text-field v-model="linkUrl" :label="$t('richtext.link.input.label')" :placeholder="$t('richtext.link.input.placeholder')" dir="ltr" class="my-3" outlined hide-details />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="setLink()" min-width="125" large>
              {{ $t('richtext.link.button') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-arrow-u-left-top`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.undo.tooltip') }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-arrow-u-right-top`" />
          </v-btn>
        </template>
        <span>{{ $t('richtext.redo.tooltip') }}</span>
      </v-tooltip>

      <v-divider />
    </div>
    <editor-content :editor="editor" />

    <v-card v-if="withImage" color="transparent" max-width="200" outlined>
        <v-card-text class="pt-0">
            <label>
                <input ref="newImagesInput" @change="addImages($event)" class="d-none" type="file" name="images" accept="image/*" multiple>
                <div class="border-dashed px-3 py-5 text-center primary--text h-100 d-flex flex-column align-center justify-center">
                    <v-icon color="primary" v-text="`mdi-camera`" class="display-1" small />
                    <div class="caption">{{ $t('questions.upload_image') }}</div>
                </div>
            </label>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import Document from '@tiptap/extension-document'
import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code'
import Blockquote from '@tiptap/extension-blockquote'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import History from '@tiptap/extension-history'
import TextDirection from '@/extensions/tiptap-text-direction'

export default {
  name: 'AallaamRichText',
  components: { EditorContent },
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: ''
    },
    withImage: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    value(newVal) {
      if(newVal == '') this.clearText()
    }
  },
  data() {
    return {
      editor: null,
      linkDialog: false,
      linkUrl: '',
      tableCells: {
        rows: 10,
        cols: 10,
        row: 0,
        col: 0
      }
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [ Document, Gapcursor, Paragraph, Text, Bold, Italic, Underline, Subscript, Superscript, TextAlign.configure({types: ['paragraph'] }), Code, Blockquote, Link, Image, BulletList, OrderedList, ListItem, Gapcursor, Table, TableRow, TableHeader, TableCell, History, TextDirection.configure({types: ['paragraph'] }) ],
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },
  methods: {
    addImages(event) {
      Object.values(event.target.files).map(async file => {
        const formData = new FormData()
        formData.append('image', file);
        const imageUrl = (await this.$postQuestionImageApi(formData)).data.data.url;
        this.editor.commands.setImage({ src: imageUrl }, )
      });
    },
    setLink() {
      if(this.linkUrl) {
        this.editor.commands.setLink({ href: this.linkUrl, target: '_blank' })
        this.linkUrl = ''
        this.linkDialog = false
      }
    },
    clearText() {
      this.editor.commands.clearContent()
    },
    tableCellsHover(rows, cols) {
      this.tableCells.row = rows;
      this.tableCells.col = cols;
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>