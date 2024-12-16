# Задание 1. Разработка приложения, содержащего форму ввода и сохраниения в БД
Требования:
1. Приложение состоит из одного окна.
2. Окно содержит текстовые поля ввода, у каждого поля метка с описанием поля
(пример: "Электронная почта")
3. Окно содержит три кнопки: "Сохранить", "Отменить", "Справка". 
4. По нажатию кнопки "отменить" все поля очищаются.
5. По нажатию кнопки "Справка" выводить диалоговое окно с краткой информацией о форме.
6. По нажатию кнопки "Сохранить" - сохранить информацию в БД.
7. При работе с БД использовать отдельные слои service и repository (dao)

## Создание окна
```java
// Вариант с наследованием от JFrame
public class SimpleWindow extends JFrame {

    public SimpleWindow() {
        super();
        // Поведение программы при закрытии окна: прекращает работу при закрытии окна
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        // Задаем размер окна
        this.setSize(600, 600);
        // Заголовок окна
        this.setTitle("Simple Window");
        // Показываем окно
        this.setVisible(true);
    }

    public static void main(String[] args) {
        // Формируем окно и его компоненты в потоке рассылки сообщений (с момощью invokeLater)
        SwingUtilities.invokeLater(new Runnable() {
                    public void run() { new SimpleWindow(); } });
    }
}
```

## Добавление в окно метки (JLabel)

```java
import javax.swing.*;

public class LabelWindow extends JFrame {

    private JLabel label;

    public LabelWindow() {
        super("Label");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setSize(600, 600);
        label = new JLabel("Текст метки");
        
        this.add(label);
        this.setVisible(true);
    }
    ...
```

## Добавление в окно текстового поля

```java
import javax.swing.*;

public class TextFieldWindow extends JFrame {

    private JTextField tfAddress;

    public TextFieldWindow() {
        super("TextField");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setSize(600, 600);
        tfAddress = new JTextField();
        
        this.add(tfAddress);
        // управление через свойсво text: setText, getText
        tfAddress.setText("Казань, Кремлевская");
        this.setVisible(true);
    }
    ...
```

## Работа с кнопкой

Основное событие которое принимает эта компонента описывается интерфейсом 
`ActionListener` и методом `actionPerformed`

```java
import javax.swing.*;

public class ButtonWindow extends JFrame {

    private JButton btnSetDefaultAddress;
    private JTextField tfAddress;

    public ButtonWindow() {
        super("Button");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setSize(600, 600);
        tfAddress = new JTextField();
        btnSetDefaultAddress = new JButton("Задать адрес по умолчанию");
        // Привязываем кнопку к слушателю (подписываемся на событие), используя анонимный класс
        btnSetDefaultAddress.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // при нажатии меняем тект в поле tfAddress
                tfAddress.setText("Казань, Кремлевская");
            }
        });
        
        this.add(btnOk);
        this.setVisible(true);
    }
    ...
```

## Диалоговое окно (простое сообщение)

Стандартные диалоги реализованы в классе `JOptionPane`

- Сообщение (`JOptionPane.showMessageDialog`)
- Запрос информации (`JOptionPane.showInputDialog`)

```
JOptionPane.showMessageDialog(родительская_компонента, сообщение, 
         [заголовок_окна, тип_панели, иконка])
```

```java
...
ImageIcon icon = new ImageIcon("favico.png");
                JOptionPane.showMessageDialog(
                        null, "Форма ввод данных", "справочная",
                        JOptionPane.INFORMATION_MESSAGE, icon);
...
```